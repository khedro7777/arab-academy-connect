import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import StudentNavigation from '../components/StudentNavigation';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Progress } from '../components/ui/progress';
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
  ArrowLeft,
  FileText,
  MessageSquare
} from 'lucide-react';

const StudentDashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const renderContent = () => {
    switch (currentPage) {
      case 'lessons':
        return <LessonsPage searchQuery={searchQuery} />;
      case 'schedule':
        return <SchedulePage />;
      case 'exams':
        return <ExamsPage />;
      case 'results':
        return <ResultsPage />;
      case 'tickets':
        return <TicketsPage />;
      case 'progress':
        return <ProgressPage />;
      case 'profile':
        return <ProfilePage />;
      case 'payments':
        return <PaymentsPage />;
      default:
        return <DashboardHome />;
    }
  };

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
            <StudentNavigation 
              currentPath={`/student/${currentPage === 'dashboard' ? '' : currentPage}`} 
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

// Component for Dashboard Home
const DashboardHome = () => (
  <>
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
  </>
);

// Lessons Page Component
const LessonsPage = ({ searchQuery }: { searchQuery: string }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">دروسي</h1>
      <Input 
        placeholder="البحث في الدروس..." 
        className="w-64"
        value={searchQuery}
        onChange={(e) => searchQuery = e.target.value}
      />
    </div>

    <Tabs defaultValue="all" className="space-y-4">
      <TabsList>
        <TabsTrigger value="all">جميع الدروس</TabsTrigger>
        <TabsTrigger value="math">الرياضيات</TabsTrigger>
        <TabsTrigger value="physics">الفيزياء</TabsTrigger>
        <TabsTrigger value="chemistry">الكيمياء</TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Math Lessons */}
          <Card className="p-4">
            <div className="aspect-video bg-primary/10 rounded-lg mb-3 flex items-center justify-center">
              <Play className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">الجبر الخطي - الجزء الأول</h3>
            <p className="text-sm text-muted-foreground mb-3">د. سارة أحمد • الرياضيات</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">مكتمل</span>
              <span className="text-xs text-muted-foreground">45 دقيقة</span>
            </div>
            <Progress value={100} className="mb-3" />
            <Button className="w-full" variant="outline">
              <Play className="h-4 w-4 ml-2" />
              إعادة المشاهدة
            </Button>
          </Card>

          <Card className="p-4">
            <div className="aspect-video bg-educational/10 rounded-lg mb-3 flex items-center justify-center">
              <Play className="h-8 w-8 text-educational" />
            </div>
            <h3 className="font-semibold mb-2">الكهرباء الساكنة</h3>
            <p className="text-sm text-muted-foreground mb-3">أ. محمد علي • الفيزياء</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded">قيد المشاهدة</span>
              <span className="text-xs text-muted-foreground">38 دقيقة</span>
            </div>
            <Progress value={65} className="mb-3" />
            <Button className="w-full" variant="educational">
              <Play className="h-4 w-4 ml-2" />
              متابعة المشاهدة
            </Button>
          </Card>

          <Card className="p-4">
            <div className="aspect-video bg-primary/10 rounded-lg mb-3 flex items-center justify-center">
              <Play className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">المركبات العضوية</h3>
            <p className="text-sm text-muted-foreground mb-3">د. فاطمة حسن • الكيمياء</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">لم يبدأ</span>
              <span className="text-xs text-muted-foreground">52 دقيقة</span>
            </div>
            <Progress value={0} className="mb-3" />
            <Button className="w-full" variant="outline">
              <Play className="h-4 w-4 ml-2" />
              بدء المشاهدة
            </Button>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  </div>
);

// Schedule Page Component
const SchedulePage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">جدول الحصص</h1>
    
    <div className="grid grid-cols-7 gap-2 mb-4">
      {['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'].map((day) => (
        <div key={day} className="text-center font-semibold p-2 bg-muted rounded">
          {day}
        </div>
      ))}
    </div>

    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">الأحد</div>
            <div className="text-lg font-bold">15</div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="bg-primary/10 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">الرياضيات - الجبر</h3>
                  <p className="text-sm text-muted-foreground">د. سارة أحمد</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">10:00 ص - 11:30 ص</div>
                  <Badge variant="default" className="text-xs">حصة مباشرة</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

// Exams Page Component  
const ExamsPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">الاختبارات</h1>
    
    <Tabs defaultValue="upcoming">
      <TabsList>
        <TabsTrigger value="upcoming">المقبلة</TabsTrigger>
        <TabsTrigger value="completed">المكتملة</TabsTrigger>
        <TabsTrigger value="results">النتائج</TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming" className="space-y-4">
        <Card className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">اختبار الرياضيات - الجبر الخطي</h3>
              <p className="text-muted-foreground">د. سارة أحمد</p>
            </div>
            <Badge variant="secondary">غداً</Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25</div>
              <div className="text-xs text-muted-foreground">سؤال</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-educational">90</div>
              <div className="text-xs text-muted-foreground">دقيقة</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">100</div>
              <div className="text-xs text-muted-foreground">درجة</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">50</div>
              <div className="text-xs text-muted-foreground">درجة النجاح</div>
            </div>
          </div>
          <Button className="w-full" variant="educational">
            <FileText className="h-4 w-4 ml-2" />
            بدء الاختبار
          </Button>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
);

// Results Page Component
const ResultsPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">النتائج والدرجات</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6 text-center">
        <div className="text-3xl font-bold text-success mb-2">92%</div>
        <div className="text-muted-foreground">المعدل العام</div>
      </Card>
      <Card className="p-6 text-center">
        <div className="text-3xl font-bold text-primary mb-2">A+</div>
        <div className="text-muted-foreground">التقدير العام</div>
      </Card>
      <Card className="p-6 text-center">
        <div className="text-3xl font-bold text-educational mb-2">15</div>
        <div className="text-muted-foreground">الترتيب</div>
      </Card>
    </div>

    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">تفصيل الدرجات</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
          <div>
            <div className="font-medium">اختبار الرياضيات - الجبر</div>
            <div className="text-sm text-muted-foreground">15 نوفمبر 2024</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-success">95/100</div>
            <div className="text-xs text-success">A+</div>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

// Tickets Page Component
const TicketsPage = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">التذاكر والاستفسارات</h1>
      <Button variant="educational">
        <MessageSquare className="h-4 w-4 ml-2" />
        استفسار جديد
      </Button>
    </div>

    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-warning rounded-full flex items-center justify-center">
            <MessageSquare className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">استفسار حول درس التفاضل</h3>
              <Badge variant="secondary">في الانتظار</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              لم أفهم الجزء الخاص بالقواعد الأساسية للتفاضل، هل يمكن توضيح أكثر؟
            </p>
            <div className="text-xs text-muted-foreground">إلى: د. سارة أحمد • منذ ساعتين</div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

// Progress Page Component
const ProgressPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">التقدم الأكاديمي</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <h3 className="font-semibold mb-4">الرياضيات</h3>
        <div className="text-center mb-4">
          <div className="text-4xl font-bold text-primary mb-2">85%</div>
          <Progress value={85} className="mb-2" />
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>الدروس المكتملة</span>
            <span>12/15</span>
          </div>
          <div className="flex justify-between">
            <span>الاختبارات</span>
            <span>8/10</span>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

// Profile Page Component
const ProfilePage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">الملف الشخصي</h1>
    
    <Card className="p-6">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 bg-gradient-to-r from-primary to-educational rounded-full flex items-center justify-center">
          <span className="text-2xl text-white font-bold">أ</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold">أحمد محمد</h2>
          <p className="text-muted-foreground">الصف الثالث الثانوي</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">الاسم الكامل</label>
            <Input defaultValue="أحمد محمد سعيد" />
          </div>
          <div>
            <label className="text-sm font-medium">البريد الإلكتروني</label>
            <Input defaultValue="ahmed@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium">رقم الهاتف</label>
            <Input defaultValue="01234567890" />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">المرحلة التعليمية</label>
            <Input defaultValue="الثانوية العامة" />
          </div>
          <div>
            <label className="text-sm font-medium">الصف الدراسي</label>
            <Input defaultValue="الثالث الثانوي" />
          </div>
          <div>
            <label className="text-sm font-medium">المحافظة</label>
            <Input defaultValue="القاهرة" />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button variant="educational">
          حفظ التغييرات
        </Button>
      </div>
    </Card>
  </div>
);

// Payments Page Component
const PaymentsPage = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">المدفوعات والاشتراكات</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">الاشتراك الحالي</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>نوع الاشتراك</span>
            <span className="font-semibold">الباقة الذهبية</span>
          </div>
          <div className="flex justify-between">
            <span>تاريخ التجديد</span>
            <span>15 ديسمبر 2024</span>
          </div>
          <div className="flex justify-between">
            <span>المبلغ الشهري</span>
            <span className="font-semibold">299 ج.م</span>
          </div>
        </div>
        <Button className="w-full mt-4" variant="educational">
          تجديد الاشتراك
        </Button>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">سجل المدفوعات</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
            <div>
              <div className="font-medium">الباقة الذهبية</div>
              <div className="text-sm text-muted-foreground">15 نوفمبر 2024</div>
            </div>
            <div className="text-success font-semibold">299 ج.م</div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export default StudentDashboard;