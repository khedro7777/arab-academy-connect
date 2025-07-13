import React, { useState } from 'react';
import AdminNavigation from '../components/AdminNavigation';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign, 
  Brain,
  Shield,
  Activity,
  UserCheck,
  FileText,
  BarChart3,
  Calendar,
  Globe,
  Server,
  Database,
  Zap,
  Eye,
  Settings,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'teachers':
        return <div className="p-6"><h1 className="text-2xl font-bold">إدارة المدرسين</h1></div>;
      case 'students':
        return <div className="p-6"><h1 className="text-2xl font-bold">إدارة الطلاب</h1></div>;
      case 'content':
        return <div className="p-6"><h1 className="text-2xl font-bold">مراقبة المحتوى</h1></div>;
      case 'ai-oversight':
        return <div className="p-6"><h1 className="text-2xl font-bold">إشراف AI</h1></div>;
      case 'payments':
        return <div className="p-6"><h1 className="text-2xl font-bold">إدارة المدفوعات</h1></div>;
      case 'analytics':
        return <div className="p-6"><h1 className="text-2xl font-bold">التقارير والتحليلات</h1></div>;
      case 'settings':
        return <div className="p-6"><h1 className="text-2xl font-bold">إعدادات النظام</h1></div>;
      default:
        return <AdminDashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-background rtl">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-destructive rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-primary">منصة التعلم - لوحة الإدارة</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/'}>
              العودة للرئيسية
            </Button>
            <Button variant="outline" size="sm">
              <Activity className="h-4 w-4 ml-2" />
              مراقبة مباشرة
            </Button>
            <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">المشرف العام</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-l border-border h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-4">
            <AdminNavigation 
              currentPath={`/admin/${currentPage === 'dashboard' ? '' : currentPage}`}
              onNavigate={(page) => setCurrentPage(page)}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const AdminDashboardHome = () => (
  <>
    {/* System Status Alert */}
    <div className="mb-6">
      <div className="bg-gradient-to-r from-success/10 to-primary/10 border border-success/20 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <CheckCircle className="h-6 w-6 text-success" />
          <div>
            <p className="font-medium text-success">النظام يعمل بشكل طبيعي</p>
            <p className="text-sm text-muted-foreground">آخر فحص: منذ دقيقتين - جميع الخدمات متاحة</p>
          </div>
          <Button variant="outline" size="sm" className="mr-auto">
            <Eye className="h-4 w-4 ml-2" />
            مراقبة مفصلة
          </Button>
        </div>
      </div>
    </div>

    {/* Key Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="card-educational p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-primary">1,247</div>
            <div className="text-sm text-muted-foreground">إجمالي المدرسين</div>
            <div className="flex items-center gap-1 text-xs text-success">
              <ArrowUp className="h-3 w-3" />
              +45 هذا الشهر
            </div>
          </div>
          <UserCheck className="h-8 w-8 text-primary" />
        </div>
      </Card>

      <Card className="card-educational p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-educational">15,683</div>
            <div className="text-sm text-muted-foreground">إجمالي الطلاب</div>
            <div className="flex items-center gap-1 text-xs text-success">
              <ArrowUp className="h-3 w-3" />
              +234 هذا الشهر
            </div>
          </div>
          <Users className="h-8 w-8 text-educational" />
        </div>
      </Card>

      <Card className="card-educational p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-success">2.4M</div>
            <div className="text-sm text-muted-foreground">الإيرادات (ج.م)</div>
            <div className="flex items-center gap-1 text-xs text-success">
              <ArrowUp className="h-3 w-3" />
              +12% هذا الشهر
            </div>
          </div>
          <DollarSign className="h-8 w-8 text-success" />
        </div>
      </Card>

      <Card className="card-educational p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-warning">342</div>
            <div className="text-sm text-muted-foreground">المعاملات اليوم</div>
            <div className="flex items-center gap-1 text-xs text-destructive">
              <ArrowDown className="h-3 w-3" />
              -5% عن أمس
            </div>
          </div>
          <Activity className="h-8 w-8 text-warning" />
        </div>
      </Card>
    </div>
  </>
);

export default AdminDashboard;