import React from 'react';
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
            <AdminNavigation currentPath="/admin" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
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

          {/* Critical Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-4 border-destructive/20 bg-destructive/5">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <div>
                  <p className="text-sm font-medium text-destructive">28 مراجعة عاجلة</p>
                  <p className="text-xs text-muted-foreground">حسابات مدرسين + محتوى</p>
                </div>
                <Button size="sm" variant="destructive">عرض</Button>
              </div>
            </Card>

            <Card className="p-4 border-warning/20 bg-warning/5">
              <div className="flex items-center gap-3">
                <Brain className="h-6 w-6 text-warning" />
                <div>
                  <p className="text-sm font-medium text-warning">15 اختبار AI يحتاج مراجعة</p>
                  <p className="text-xs text-muted-foreground">أسئلة مشكوك في جودتها</p>
                </div>
                <Button size="sm" variant="warning">مراجعة</Button>
              </div>
            </Card>

            <Card className="p-4 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-medium text-primary">نمو 15% هذا الشهر</p>
                  <p className="text-xs text-muted-foreground">مدرسين وطلاب جدد</p>
                </div>
                <Button size="sm" variant="outline">تفاصيل</Button>
              </div>
            </Card>
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

          {/* Recent Activities and System Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Pending Reviews */}
            <Card className="card-educational p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">المراجعات المعلقة</h3>
                <Badge variant="destructive" className="text-xs">28 عنصر</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">د. أحمد عبد الرحمن</h4>
                    <p className="text-xs text-muted-foreground">طلب انضمام كمدرس - فيزياء ثانوي</p>
                    <p className="text-xs text-muted-foreground">منذ 3 ساعات</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="success">قبول</Button>
                    <Button size="sm" variant="outline">مراجعة</Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="w-10 h-10 bg-warning rounded-lg flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">اختبار الرياضيات المتقدمة</h4>
                    <p className="text-xs text-muted-foreground">15 سؤال يحتاج مراجعة جودة</p>
                    <p className="text-xs text-muted-foreground">د. سارة أحمد</p>
                  </div>
                  <Button size="sm" variant="warning">مراجعة</Button>
                </div>

                <div className="flex items-center gap-4 p-3 bg-primary/10 rounded-lg">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">محتوى درس الكيمياء العضوية</h4>
                    <p className="text-xs text-muted-foreground">فيديو جديد 45 دقيقة</p>
                    <p className="text-xs text-muted-foreground">أ. محمد علي</p>
                  </div>
                  <Button size="sm" variant="outline">عرض</Button>
                </div>

                <div className="flex items-center gap-4 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                  <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">بلاغ على محتوى</h4>
                    <p className="text-xs text-muted-foreground">شكوى من طالب حول درس الفيزياء</p>
                    <p className="text-xs text-muted-foreground">منذ يوم واحد</p>
                  </div>
                  <Button size="sm" variant="destructive">عاجل</Button>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                عرض جميع المراجعات (28)
              </Button>
            </Card>

            {/* System Status */}
            <Card className="card-educational p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">حالة النظام</h3>
              </div>
              
              <div className="space-y-4">
                {/* Server Status */}
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-success" />
                      <span className="font-medium text-sm">الخوادم الرئيسية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-xs text-success">متاح</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>CPU: 45%</div>
                    <div>RAM: 67%</div>
                    <div>القرص: 23%</div>
                  </div>
                </div>

                {/* Database Status */}
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-success" />
                      <span className="font-medium text-sm">قاعدة البيانات</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-xs text-success">متاح</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>الاتصالات: 234/500</div>
                    <div>الاستعلامات: 1.2K/ث</div>
                  </div>
                </div>

                {/* AI Services */}
                <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-warning" />
                      <span className="font-medium text-sm">خدمات الذكاء الاصطناعي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      <span className="text-xs text-warning">بطء</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    زمن الاستجابة: 2.3 ثانية (طبيعي: 0.8 ثانية)
                  </div>
                </div>

                {/* Payment System */}
                <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-success" />
                      <span className="font-medium text-sm">نظام المدفوعات</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-xs text-success">متاح</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    آخر معاملة: منذ 3 دقائق
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Analytics Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Platform Growth */}
            <Card className="card-educational p-6 lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">نمو المنصة</h3>
                <Button variant="ghost" size="sm">
                  <BarChart3 className="h-4 w-4 ml-2" />
                  تقرير مفصل
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <div className="text-xl font-bold text-primary">45</div>
                  <div className="text-xs text-muted-foreground">مدرسين جدد</div>
                </div>
                <div className="text-center p-3 bg-educational/10 rounded-lg">
                  <div className="text-xl font-bold text-educational">234</div>
                  <div className="text-xs text-muted-foreground">طلاب جدد</div>
                </div>
                <div className="text-center p-3 bg-success/10 rounded-lg">
                  <div className="text-xl font-bold text-success">156</div>
                  <div className="text-xs text-muted-foreground">دروس جديدة</div>
                </div>
                <div className="text-center p-3 bg-warning/10 rounded-lg">
                  <div className="text-xl font-bold text-warning">89</div>
                  <div className="text-xs text-muted-foreground">اختبارات AI</div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">نمو المدرسين</span>
                    <span className="text-sm text-success">+15%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">نمو الطلاب</span>
                    <span className="text-sm text-success">+22%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-educational h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">نمو الإيرادات</span>
                    <span className="text-sm text-success">+18%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="card-educational p-6">
              <h3 className="text-lg font-semibold mb-4">إجراءات سريعة</h3>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <UserCheck className="h-4 w-4 ml-2" />
                  مراجعة حسابات المدرسين (8)
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Brain className="h-4 w-4 ml-2" />
                  مراجعة أسئلة AI (15)
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="h-4 w-4 ml-2" />
                  البلاغات والشكاوى (5)
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 ml-2" />
                  إعدادات النظام
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 ml-2" />
                  تقارير مفصلة
                </Button>
              </div>

              <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary">تحديث جديد متاح</p>
                <p className="text-xs text-muted-foreground">الإصدار 2.1.3 - إصلاحات أمنية</p>
                <Button size="sm" variant="default" className="w-full mt-2">
                  تحديث الآن
                </Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;