import React from 'react';
import TeacherNavigation from '../components/TeacherNavigation';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  MessageSquare, 
  DollarSign, 
  BookOpen,
  Video,
  Clock,
  Star,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Brain,
  Award,
  UserPlus
} from 'lucide-react';

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-background rtl">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-educational to-primary rounded-lg flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-primary">منصة التعلم - لوحة المدرس</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => window.location.href = '/'}>
              العودة للرئيسية
            </Button>
            <Button variant="educational" size="sm">
              <UserPlus className="h-4 w-4 ml-2" />
              دعوة طلاب جدد
            </Button>
            <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
              <div className="w-8 h-8 bg-educational rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-semibold">س</span>
              </div>
              <span className="text-sm font-medium">د. سارة أحمد</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-l border-border h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-4">
            <TeacherNavigation currentPath="/teacher" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-educational to-primary rounded-xl p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">أهلاً د. سارة أحمد!</h2>
                  <p className="text-educational-foreground/80 mb-4">
                    لديك 3 حصص اليوم و 5 استفسارات جديدة من الطلاب
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <Video className="h-4 w-4 ml-2" />
                      بدء حصة مباشرة
                    </Button>
                    <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <Brain className="h-4 w-4 ml-2" />
                      إنشاء اختبار ذكي
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">142</div>
                  <div className="text-sm text-educational-foreground/80">إجمالي الطلاب</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="card-educational p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-primary">142</div>
                  <div className="text-sm text-muted-foreground">إجمالي الطلاب</div>
                  <div className="text-xs text-success">+12 هذا الشهر</div>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </Card>

            <Card className="card-educational p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-success">12,450</div>
                  <div className="text-sm text-muted-foreground">الأرباح (ج.م)</div>
                  <div className="text-xs text-success">+8% عن الشهر الماضي</div>
                </div>
                <DollarSign className="h-8 w-8 text-success" />
              </div>
            </Card>

            <Card className="card-educational p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-educational">48</div>
                  <div className="text-sm text-muted-foreground">حصص مكتملة</div>
                  <div className="text-xs text-educational">هذا الشهر</div>
                </div>
                <BookOpen className="h-8 w-8 text-educational" />
              </div>
            </Card>

            <Card className="card-educational p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-warning">5</div>
                  <div className="text-sm text-muted-foreground">استفسارات جديدة</div>
                  <div className="text-xs text-warning">تحتاج رد</div>
                </div>
                <MessageSquare className="h-8 w-8 text-warning" />
              </div>
            </Card>
          </div>

          {/* Today's Schedule and Recent Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Today's Schedule */}
            <Card className="card-educational p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">جدول حصص اليوم</h3>
                <Button variant="ghost" size="sm">
                  <Calendar className="h-4 w-4 ml-2" />
                  عرض الجدول الكامل
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-educational/10 rounded-lg border border-educational/20">
                  <div className="w-12 h-12 bg-educational rounded-lg flex items-center justify-center">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">الرياضيات - الجبر الخطي</h4>
                    <p className="text-sm text-muted-foreground">الصف الثالث الثانوي - المجموعة أ</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">10:00 ص - 11:30 ص</span>
                      <Badge variant="default" className="text-xs">23 طالب</Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button size="sm" variant="educational">
                      بدء الحصة
                    </Button>
                    <p className="text-xs text-muted-foreground mt-1">بعد 15 دقيقة</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">الرياضيات - التفاضل والتكامل</h4>
                    <p className="text-sm text-muted-foreground">الصف الثالث الثانوي - المجموعة ب</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">2:00 م - 3:30 م</span>
                      <Badge variant="secondary" className="text-xs">31 طالب</Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button size="sm" variant="outline">
                      جدولة
                    </Button>
                    <p className="text-xs text-muted-foreground mt-1">بعد 4 ساعات</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <Video className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">الرياضيات - الهندسة التحليلية</h4>
                    <p className="text-sm text-muted-foreground">الصف الثاني الثانوي</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">6:00 م - 7:30 م</span>
                      <Badge variant="secondary" className="text-xs">18 طالب</Badge>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button size="sm" variant="outline">
                      جدولة
                    </Button>
                    <p className="text-xs text-muted-foreground mt-1">اليوم</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Student Inquiries */}
            <Card className="card-educational p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">استفسارات الطلاب</h3>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 ml-2" />
                  عرض الكل (5)
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                    <AlertCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">أحمد محمد</p>
                    <p className="text-sm text-muted-foreground">لم أفهم درس التفاضل الجزئي، هل يمكن توضيح أكثر؟</p>
                    <p className="text-xs text-muted-foreground mt-1">منذ 30 دقيقة</p>
                  </div>
                  <Button size="sm" variant="warning">
                    رد
                  </Button>
                </div>

                <div className="flex items-start gap-3 p-3 bg-primary/10 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">فاطمة علي</p>
                    <p className="text-sm text-muted-foreground">متى سيكون الاختبار الشهري؟</p>
                    <p className="text-xs text-muted-foreground mt-1">منذ ساعة</p>
                  </div>
                  <Button size="sm" variant="outline">
                    رد
                  </Button>
                </div>

                <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">محمد حسن</p>
                    <p className="text-sm text-muted-foreground">شكراً على الشرح الممتاز في حصة اليوم</p>
                    <p className="text-xs text-muted-foreground mt-1">منذ 3 ساعات</p>
                  </div>
                  <Badge variant="default" className="text-xs">مجاب عليه</Badge>
                </div>

                <div className="flex items-start gap-3 p-3 bg-educational/10 rounded-lg">
                  <div className="w-8 h-8 bg-educational rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">نورا أحمد</p>
                    <p className="text-sm text-muted-foreground">هل يمكن إضافة تمارين إضافية للباب الثالث؟</p>
                    <p className="text-xs text-muted-foreground mt-1">منذ يوم</p>
                  </div>
                  <Button size="sm" variant="outline">
                    رد
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Performance Analytics and AI Suggestions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Performance Analytics */}
            <Card className="card-educational p-6 lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">تحليل الأداء</h3>
                <Button variant="ghost" size="sm">
                  <TrendingUp className="h-4 w-4 ml-2" />
                  تقرير مفصل
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">92%</div>
                  <div className="text-xs text-muted-foreground">نسبة الحضور</div>
                </div>
                <div className="text-center p-3 bg-educational/10 rounded-lg">
                  <div className="text-2xl font-bold text-educational">4.8</div>
                  <div className="text-xs text-muted-foreground">تقييم المدرس</div>
                </div>
                <div className="text-center p-3 bg-success/10 rounded-lg">
                  <div className="text-2xl font-bold text-success">88%</div>
                  <div className="text-xs text-muted-foreground">معدل النجاح</div>
                </div>
                <div className="text-center p-3 bg-warning/10 rounded-lg">
                  <div className="text-2xl font-bold text-warning">24h</div>
                  <div className="text-xs text-muted-foreground">متوسط الرد</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">حضور المجموعة أ</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">حضور المجموعة ب</span>
                    <span className="text-sm text-muted-foreground">87%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-educational h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">رضا الطلاب</span>
                    <span className="text-sm text-muted-foreground">4.8/5</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Suggestions */}
            <Card className="card-educational p-6">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">اقتراحات ذكية</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-sm font-medium text-primary">تحسين التفاعل</p>
                  </div>
                  <p className="text-xs text-muted-foreground">أضف استطلاعات سريعة أثناء الحصص لزيادة التفاعل</p>
                </div>
                
                <div className="p-3 bg-educational/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-educational rounded-full"></div>
                    <p className="text-sm font-medium text-educational">اختبارات تكيفية</p>
                  </div>
                  <p className="text-xs text-muted-foreground">استخدم الذكاء الاصطناعي لإنشاء اختبارات مخصصة</p>
                </div>
                
                <div className="p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <p className="text-sm font-medium text-success">وقت مثالي</p>
                  </div>
                  <p className="text-xs text-muted-foreground">أفضل وقت لحصصك: 10 ص - 12 م</p>
                </div>

                <div className="p-3 bg-warning/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <p className="text-sm font-medium text-warning">تذكير</p>
                  </div>
                  <p className="text-xs text-muted-foreground">راجع درجات الطلاب في اختبار الجبر</p>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                <Brain className="h-4 w-4 ml-2" />
                المزيد من الاقتراحات
              </Button>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;