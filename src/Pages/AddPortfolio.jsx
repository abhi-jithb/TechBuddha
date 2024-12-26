import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import toast from "react-hot-toast";

export default function UserForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    userType: "college", 
    collegename: "",
    position: "",
    currentPositions: [""],
    year: "",
    testimonials: [""],
    skills: [""], 
    portfolioUrl: "", 
    image: null,
    certificates: [],
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addingToast = toast.loading("Adding user...");
    const data = new FormData();

  
    data.append("fullname", formData.fullname);
    data.append("userType", formData.userType);
    

    if (formData.userType === "college") {
      data.append("collegename", formData.collegename);
      data.append("year", formData.year);
    }

  
    if (formData.userType === "college") {
      data.append("currentPositions", JSON.stringify([formData.position]));
    } else {
      data.append("currentPositions", JSON.stringify(formData.currentPositions.filter(pos => pos.trim())));
    }

  
    data.append("testimonials", JSON.stringify(formData.testimonials));

 
    if (formData.userType === "job" || formData.userType === "development") {
      data.append("skills", JSON.stringify(formData.skills));
    }

    
    if (formData.userType === "marketing" || formData.userType === "development") {
      data.append("portfolioUrl", formData.portfolioUrl);
    }

  
    if (formData.image) {
      data.append("image", formData.image);
    }
    
    formData.certificates.forEach((cert) => {
      if (cert) data.append("certificates", cert);
    });

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: data,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add user");
      }

      const result = await response.json();
      
      if (result.success) {
        toast.success("User added successfully!", { id: addingToast });
        setFormData({
          fullname: "",
          userType: "college",
          collegename: "",
          position: "",
          currentPositions: [""],
          year: "",
          testimonials: [""],
          skills: [""],
          portfolioUrl: "",
          image: null,
          certificates: [],
        });
        setError(null);
      } else {
        throw new Error(result.error || "Failed to add user");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to add user", { id: addingToast });
      setError(error.message || "Failed to add user. Please try again.");
    }
  };

  return (
    <div className="w-full text-black mx-auto px-4 min-h-screen py-8 mt-24 bg-white">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Add New User</h2>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* User Type Selection */}
        <div className="space-y-2">
          <Label htmlFor="userType">User Type</Label>
          <select
            id="userType"
            className="w-full px-4 py-2 border rounded bg-white text-black"
            value={formData.userType}
            onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
          >
            <option value="college">College</option>
            <option value="job">Job</option>
            <option value="marketing">Marketing</option>
            <option value="development">Development</option>
          </select>
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            id="fullname"
            value={formData.fullname}
            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
            required
          />
        </div>

        {/* College Fields */}
        {formData.userType === "college" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="collegename">College Name</Label>
              <Input
                id="collegename"
                value={formData.collegename}
                onChange={(e) => setFormData({ ...formData, collegename: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">Position</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <select
                id="year"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="block w-full px-3 py-2 border rounded-md text-black bg-white"
                required
              >
                <option value="">Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        )}

        {/* Job/Development Fields */}
        {(formData.userType === "job" || formData.userType === "development") && (
          <>
            <div className="space-y-2">
              <Label htmlFor="currentPositions">Current Position(s)</Label>
              {formData.currentPositions.map((position, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    value={position}
                    onChange={(e) => {
                      const newPositions = [...formData.currentPositions];
                      newPositions[index] = e.target.value;
                      setFormData({ ...formData, currentPositions: newPositions });
                    }}
                    required
                  />
                  {formData.currentPositions.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => {
                        const newPositions = formData.currentPositions.filter((_, i) => i !== index);
                        setFormData({ ...formData, currentPositions: newPositions });
                      }}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="secondary"
                onClick={() => setFormData({
                  ...formData,
                  currentPositions: [...formData.currentPositions, ""]
                })}
              >
                Add Position
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              {formData.skills.map((skill, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    value={skill}
                    onChange={(e) => {
                      const newSkills = [...formData.skills];
                      newSkills[index] = e.target.value;
                      setFormData({ ...formData, skills: newSkills });
                    }}
                    required
                  />
                  {formData.skills.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => {
                        const newSkills = formData.skills.filter((_, i) => i !== index);
                        setFormData({ ...formData, skills: newSkills });
                      }}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="secondary"
                onClick={() => setFormData({
                  ...formData,
                  skills: [...formData.skills, ""]
                })}
              >
                Add Skill
              </Button>
            </div>
          </>
        )}

       

        {/* File Upload Fields */}
        <div className="space-y-2">
          <Label htmlFor="image">Profile Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="certificates">Certificates (up to 3)</Label>
          <Input
            id="certificates"
            type="file"
            multiple
            accept="application/pdf,image/*"
            onChange={(e) => setFormData({
              ...formData,
              certificates: Array.from(e.target.files || []).slice(0, 3)
            })}
          />
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
}