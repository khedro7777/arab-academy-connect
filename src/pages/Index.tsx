import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  Shield, 
  BookOpen,
  Users,
  Brain,
  Calendar,
  Star,
  TrendingUp,
  MessageSquare,
  Play,
  UserPlus,
  ArrowLeft
} from 'lucide-react';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import AdminDashboard from './AdminDashboard';
import InstallAppButton from '../components/InstallAppButton';

type UserType = 'guest' | 'student' | 'teacher' | 'admin';

const Index = () => {
  const [currentView, setCurrentView] = useState<UserType>('guest');

  // Demo data for the landing page
  const stats = [
    { label: 'مدرس متخصص', value: '1,200+', icon: Award },
    { label: 'طالب نشط', value: '15,000+', icon: Users },
    { label: 'درس تفاعلي', value: '25,000+', icon: BookOpen },
    { label: 'نسبة نجاح', value: '95%', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Brain,
      title: 'اختبارات ذكية بالذكاء الاصطناعي',
      description: 'توليد أسئلة مخصصة وتقييم تلقائي للطلاب'
    },
    {
      icon: Calendar,
      title: 'جدولة الحصص المباشرة',
      description: 'نظام متقدم لجدولة وإدارة الحصص عبر Google Meet'
    },
    {
      icon: MessageSquare,
      title: 'نظام التذاكر والاستفسارات',
      description: 'تواصل مباشر بين الطلاب والمدرسين'
    },
    {
      icon: Star,
      title: 'تقييم ومتابعة الأداء',
      description: 'تتبع شامل لتقدم الطلاب ونتائجهم'
    }
  ];

  if (currentView === 'student') {
    return <StudentDashboard />;
  }

  if (currentView === 'teacher') {
    return <TeacherDashboard />;
  }

  if (currentView === 'admin') {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-background rtl">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-educational rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary">منصة التعلم العربية</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <InstallAppButton />
            <Button variant="outline" size="sm">
              تسجيل الدخول
            </Button>
            <Button variant="educational" size="sm">
              انضم الآن
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-educational text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">
              منصة التعلم الرقمي الأولى في الوطن العربي
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 animate-fade-in-up">
              تعلم مع أفضل المدرسين المتخصصين، احضر دروساً مباشرة، وحقق أهدافك الأكاديمية بطريقة تفاعلية ومبتكرة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Play className="h-5 w-5 ml-2" />
                ابدأ التعلم مجاناً
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <UserPlus className="h-5 w-5 ml-2" />
                انضم كمدرس
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-scale-in">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-educational rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">مميزات المنصة</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نوفر لك تجربة تعليمية متكاملة مع أحدث التقنيات والأدوات التفاعلية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-educational p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-educational rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-3">{feature.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-primary mb-4">جرب المنصة الآن</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              استكشف لوحات التحكم المختلفة واكتشف كيف يمكن للمنصة أن تحسن تجربتك التعليمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Student Demo */}
            <Card className="card-educational p-8 text-center hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setCurrentView('student')}>
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-educational rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">لوحة الطالب</h4>
              <p className="text-muted-foreground mb-6">
                تابع دروسك، احضر الحصص المباشرة، وأدي الاختبارات
              </p>
              <Button variant="educational" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                جرب الآن
              </Button>
            </Card>

            {/* Teacher Demo */}
            <Card className="card-educational p-8 text-center hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setCurrentView('teacher')}>
              <div className="w-20 h-20 bg-gradient-to-r from-educational to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-educational mb-4">لوحة المدرس</h4>
              <p className="text-muted-foreground mb-6">
                أنشئ المحتوى، أدر طلابك، واستخدم الذكاء الاصطناعي
              </p>
              <Button variant="educational" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                جرب الآن
              </Button>
            </Card>

            {/* Admin Demo */}
            <Card className="card-educational p-8 text-center hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setCurrentView('admin')}>
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-destructive rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">لوحة الإدارة</h4>
              <p className="text-muted-foreground mb-6">
                راقب النظام، راجع المحتوى، وأدر المنصة بكفاءة
              </p>
              <Button variant="default" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                جرب الآن
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-educational text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">هل أنت مستعد لبدء رحلتك التعليمية؟</h3>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            انضم إلى آلاف الطلاب والمدرسين الذين يحققون النجاح معنا كل يوم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <GraduationCap className="h-5 w-5 ml-2" />
              ابدأ كطالب
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Award className="h-5 w-5 ml-2" />
              انضم كمدرس
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-educational rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">منصة التعلم العربية</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 منصة التعلم العربية. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
