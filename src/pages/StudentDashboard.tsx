import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import StudentNavigation from '../components/StudentNavigation';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  Trophy, 
  TrendingUp, 
  Play,
  Star,
  Users,
  CheckCircle,
  AlertCircle,
  ArrowLeft
} from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-background rtl">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-educational rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-primary">منصة التعلم - لوحة الطالب</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/'}>
              العودة للرئيسية
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 ml-2" />
              جدول اليوم
            </Button>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">أ</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-l border-border h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-4">
            <StudentNavigation currentPath="/student" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-primary to-educational rounded-xl p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">مرحباً أحمد محمد!</h2>
                  <p className="text-primary-foreground/80 mb-4">
                    لديك 3 حصص اليوم و 2 اختبار هذا الأسبوع
                  </p>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Play className="h-4 w-4 ml-2" />
                    ابدأ التعلم الآن
                  </Button>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">87%</div>
                  <div className="text-sm text-primary-foreground/80">نسبة الحضور</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="card-educational p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-educational">24</div>
                  <div className="text-sm text-muted-foreground">دروس مكتملة</div>
                </div>
                <BookOpen className="h-8 w-8 text-educational" />
              </div>
            </Card>

            <Card className="card-educational p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-success">92%</div>
                  <div className="text-sm text-muted-foreground">متوسط الدرجات</div>
                </div>
                <Trophy className="h-8 w-8 text-success" />
              </div>
            </Card>

            <Card className="card-educational p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">ساعات هذا الأسبوع</div>
                </div>
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </Card>

            <Card className="card-educational p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-warning">3</div>
                  <div className="text-sm text-muted-foreground">مدرسين متابعين</div>
                </div>
                <Users className="h-8 w-8 text-warning" />
              </div>
            </Card>
          </div>

          {/* Today's Schedule and Recent Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Today's Schedule */}
            <Card className="card-educational p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">جدول اليوم</h3>
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-primary/10 rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">الرياضيات - الجبر</h4>
                    <p className="text-sm text-muted-foreground">د. سارة أحمد</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">10:00 ص - 11:30 ص</span>
                      <Badge variant="default" className="text-xs">مباشر</Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="educational">
                    انضمام
                  </Button>
                </div>

                <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-educational rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">الفيزياء - الكهرباء</h4>
                    <p className="text-sm text-muted-foreground">أ. محمد علي</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">2:00 م - 3:30 م</span>
                      <Badge variant="secondary" className="text-xs">قريباً</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">الكيمياء - العضوية</h4>
                    <p className="text-sm text-muted-foreground">د. فاطمة حسن</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">5:00 م - 6:30 م</span>
                      <Badge variant="secondary" className="text-xs">اليوم</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Activities */}
            <Card className="card-educational p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">النشاطات الأخيرة</h3>
                <Button variant="ghost" size="sm">
                  عرض الكل
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">تم إكمال درس الجبر الخطي</p>
                    <p className="text-xs text-muted-foreground">منذ ساعتين</p>
                  </div>
                  <Badge variant="default" className="text-xs">95%</Badge>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-educational rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">حصلت على تقدير ممتاز في اختبار الفيزياء</p>
                    <p className="text-xs text-muted-foreground">يوم أمس</p>
                  </div>
                  <Badge variant="default" className="text-xs">A+</Badge>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">انضممت لمجموعة الكيمياء المتقدمة</p>
                    <p className="text-xs text-muted-foreground">منذ 3 أيام</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                    <AlertCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">تذكير: اختبار الرياضيات غداً</p>
                    <p className="text-xs text-muted-foreground">منذ يوم واحد</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Progress and Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Progress Chart */}
            <Card className="card-educational p-6 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">تقدمك الأكاديمي</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">الرياضيات</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">الفيزياء</span>
                    <span className="text-sm text-muted-foreground">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-educational h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">الكيمياء</span>
                    <span className="text-sm text-muted-foreground">78%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="card-educational p-6">
              <h3 className="text-lg font-semibold mb-4">توصيات لك</h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium text-primary">مراجعة درس التفاضل</p>
                  <p className="text-xs text-muted-foreground">لتحسين درجتك في الرياضيات</p>
                </div>
                
                <div className="p-3 bg-educational/10 rounded-lg">
                  <p className="text-sm font-medium text-educational">حل تمارين إضافية</p>
                  <p className="text-xs text-muted-foreground">في الفيزياء النووية</p>
                </div>
                
                <div className="p-3 bg-success/10 rounded-lg">
                  <p className="text-sm font-medium text-success">انضم لجلسة مراجعة</p>
                  <p className="text-xs text-muted-foreground">غداً الساعة 7 مساءً</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;