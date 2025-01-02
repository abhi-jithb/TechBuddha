import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Plus, Edit, Trophy, Briefcase } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-4xl pt-24 min-h-screen mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-6 w-6" />
            Admin Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Portfolio Management
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button 
                className="h-24 text-lg"
                onClick={() => navigate('/AddPortfolio')}
              >
                <Plus className="mr-2 h-5 w-5" />
                Add Portfolio
              </Button>
              <Button 
                variant="outline"
                className="h-24 text-lg"
                onClick={() => navigate('/UserList')}
              >
                <Edit className="mr-2 h-5 w-5" />
                Edit Portfolio
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Achievement Management
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Button 
                className="h-24 text-lg"
                onClick={() => navigate('/AddAchievement')}
              >
                <Plus className="mr-2 h-5 w-5" />
                Add Achievement
              </Button>
              <Button 
                variant="outline"
                className="h-24 text-lg"
                onClick={() => navigate('/editAchievement')}
              >
                <Edit className="mr-2 h-5 w-5" />
                Edit Achievements
              </Button>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;