
import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  ShoppingBag, 
  Package, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  TrendingUp,
  DollarSign,
  Users,
  Star,
  Calculator,
  BookOpen,
  Ruler,
  Compass,
  Palette,
  Scissors,
  PenTool,
  Archive
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sold: number;
  rating: number;
  image: string;
  status: 'active' | 'inactive' | 'out_of_stock';
}

const StoreManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const products: Product[] = [
    {
      id: '1',
      name: 'آلة حاسبة علمية كاسيو FX-991',
      category: 'calculators',
      price: 85,
      stock: 45,
      sold: 128,
      rating: 4.8,
      image: '🧮',
      status: 'active'
    },
    {
      id: '2',
      name: 'مجموعة أدوات هندسية كاملة',
      category: 'geometry',
      price: 35,
      stock: 23,
      sold: 89,
      rating: 4.6,
      image: '📐',
      status: 'active'
    },
    {
      id: '3',
      name: 'كتاب الرياضيات التفاعلي - الصف الثالث',
      category: 'books',
      price: 45,
      stock: 0,
      sold: 76,
      rating: 4.7,
      image: '📚',
      status: 'out_of_stock'
    },
    {
      id: '4',
      name: 'مجموعة أقلام تلوين للأطفال',
      category: 'art',
      price: 25,
      stock: 67,
      sold: 234,
      rating: 4.9,
      image: '🎨',
      status: 'active'
    }
  ];

  const categories = [
    { id: 'calculators', name: 'آلات حاسبة', icon: Calculator, count: 12 },
    { id: 'geometry', name: 'أدوات هندسية', icon: Ruler, count: 8 },
    { id: 'books', name: 'كتب دراسية', icon: BookOpen, count: 25 },
    { id: 'art', name: 'أدوات فنية', icon: Palette, count: 15 },
    { id: 'stationery', name: 'قرطاسية', icon: PenTool, count: 30 }
  ];

  const storeStats = [
    { label: 'إجمالي المنتجات', value: '90', icon: Package, color: 'text-primary' },
    { label: 'المبيعات هذا الشهر', value: '1,240', icon: TrendingUp, color: 'text-success' },
    { label: 'الإيرادات (ج.م)', value: '45,300', icon: DollarSign, color: 'text-educational' },
    { label: 'العملاء النشطون', value: '347', icon: Users, color: 'text-warning' }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Store Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {storeStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-educational p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </Card>
          );
        })}
      </div>

      {/* Categories */}
      <Card className="card-educational p-6">
        <h3 className="text-xl font-semibold mb-4">فئات المنتجات</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="text-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-medium text-sm">{category.name}</h4>
                <p className="text-xs text-muted-foreground">{category.count} منتج</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Top Products */}
      <Card className="card-educational p-6">
        <h3 className="text-xl font-semibold mb-4">المنتجات الأكثر مبيعاً</h3>
        <div className="space-y-4">
          {products.slice(0, 3).map((product, index) => (
            <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{product.image}</div>
                <div>
                  <h4 className="font-medium">{product.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>تم بيع {product.sold}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-success">{product.price} ج.م</div>
                <Badge variant={product.status === 'active' ? 'default' : 'destructive'}>
                  {product.status === 'active' ? 'متاح' : 'نفد'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">إدارة المنتجات</h3>
        <Button className="btn-educational">
          <Plus className="h-4 w-4 ml-2" />
          إضافة منتج جديد
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="card-educational p-6">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{product.image}</div>
              <h4 className="font-semibold mb-2">{product.name}</h4>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm">{product.rating}</span>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>السعر:</span>
                <span className="font-semibold text-success">{product.price} ج.م</span>
              </div>
              <div className="flex justify-between">
                <span>المخزون:</span>
                <span className={product.stock > 0 ? 'text-success' : 'text-destructive'}>
                  {product.stock}
                </span>
              </div>
              <div className="flex justify-between">
                <span>تم البيع:</span>
                <span>{product.sold}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <Eye className="h-4 w-4 ml-2" />
                عرض
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Edit className="h-4 w-4 ml-2" />
                تعديل
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderOrders = () => (
    <Card className="card-educational p-6">
      <h3 className="text-xl font-semibold mb-4">الطلبات الحديثة</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">طلب #1001</h4>
            <p className="text-sm text-muted-foreground">أحمد محمد - آلة حاسبة علمية</p>
          </div>
          <div className="text-left">
            <div className="font-semibold text-success">85 ج.م</div>
            <Badge variant="outline">قيد التنفيذ</Badge>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h4 className="font-medium">طلب #1002</h4>
            <p className="text-sm text-muted-foreground">فاطمة علي - مجموعة أدوات هندسية</p>
          </div>
          <div className="text-left">
            <div className="font-semibold text-success">35 ج.م</div>
            <Badge variant="default">تم التسليم</Badge>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-educational to-success rounded-xl flex items-center justify-center">
          <ShoppingBag className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary">متجر الأدوات الدراسية</h2>
          <p className="text-muted-foreground">إدارة المنتجات والمبيعات</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={activeTab === 'overview' ? 'default' : 'outline'}
          onClick={() => setActiveTab('overview')}
        >
          نظرة عامة
        </Button>
        <Button
          variant={activeTab === 'products' ? 'default' : 'outline'}
          onClick={() => setActiveTab('products')}
        >
          المنتجات
        </Button>
        <Button
          variant={activeTab === 'orders' ? 'default' : 'outline'}
          onClick={() => setActiveTab('orders')}
        >
          الطلبات
        </Button>
      </div>

      {/* Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'products' && renderProducts()}
      {activeTab === 'orders' && renderOrders()}
    </div>
  );
};

export default StoreManagement;
