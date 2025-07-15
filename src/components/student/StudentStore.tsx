
import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  ShoppingBag, 
  Star, 
  Upload, 
  Wallet, 
  Gift,
  CreditCard,
  Image as ImageIcon
} from 'lucide-react';

const StudentStore = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [uploadedReceipt, setUploadedReceipt] = useState<File | null>(null);

  const products = [
    {
      id: 1,
      name: 'كراسة ملاحظات أكاديمية Mymath',
      price: 25,
      originalPrice: 35,
      image: '/placeholder.svg',
      rating: 4.8,
      category: 'قرطاسية',
      inStock: true,
      description: 'كراسة ملاحظات عالية الجودة مع تصميم أكاديمية Mymath'
    },
    {
      id: 2,
      name: 'USB فلاشة هدية المتفوق',
      price: 50,
      originalPrice: 70,
      image: '/placeholder.svg',
      rating: 4.9,
      category: 'هدايا',
      inStock: true,
      description: 'فلاشة USB بتصميم خاص للطلاب المتفوقين'
    },
    {
      id: 3,
      name: 'تيشيرت أكاديمية Mymath',
      price: 120,
      originalPrice: 150,
      image: '/placeholder.svg',
      rating: 4.7,
      category: 'ملابس',
      inStock: false,
      description: 'تيشيرت قطني مريح بلوجو أكاديمية Mymath'
    },
    {
      id: 4,
      name: 'آلة حاسبة علمية',
      price: 85,
      originalPrice: 100,
      image: '/placeholder.svg',
      rating: 4.6,
      category: 'أدوات دراسية',
      inStock: true,
      description: 'آلة حاسبة علمية متقدمة مناسبة لجميع المراحل'
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedReceipt(file);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    const remainingStars = 5 - fullStars;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">متجر أكاديمية Mymath</h2>
        <Badge variant="default" className="bg-educational text-educational-foreground">
          <ShoppingBag className="h-4 w-4 ml-1" />
          {products.length} منتج
        </Badge>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="products">المنتجات</TabsTrigger>
          <TabsTrigger value="payment">طرق الدفع</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="card-educational overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <ImageIcon className="h-16 w-16 text-muted-foreground" />
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {renderStars(product.rating)}
                      <span className="text-xs text-muted-foreground">
                        ({product.rating})
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-primary mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg font-bold text-primary">
                      {product.price} ج.م
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm line-through text-muted-foreground">
                        {product.originalPrice} ج.م
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    disabled={!product.inStock}
                    variant={product.inStock ? "educational" : "secondary"}
                  >
                    {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payment" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <Card className="card-educational p-6">
              <h3 className="text-xl font-bold text-primary mb-6">طرق الدفع المتاحة</h3>
              
              <div className="space-y-4">
                {/* Vodafone Cash */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="h-5 w-5 text-red-600" />
                    <span className="font-medium">فودافون كاش</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    ادفع عبر فودافون كاش وارفع صورة الإيصال
                  </p>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="receipt">رفع صورة الإيصال</Label>
                      <Input
                        id="receipt"
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="mt-1"
                      />
                    </div>
                    {uploadedReceipt && (
                      <div className="flex items-center gap-2 text-sm text-success">
                        <Upload className="h-4 w-4" />
                        <span>تم رفع الملف: {uploadedReceipt.name}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Points */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Wallet className="h-5 w-5 text-educational" />
                    <span className="font-medium">النقاط المتاحة</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    استخدم نقاطك المكتسبة للحصول على خصومات
                  </p>
                  <div className="bg-educational/10 rounded-lg p-3">
                    <span className="text-2xl font-bold text-educational">180</span>
                    <span className="text-sm text-muted-foreground mr-2">نقطة متاحة</span>
                  </div>
                </div>

                {/* Red Envelope */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Gift className="h-5 w-5 text-red-600" />
                    <span className="font-medium">كود الظرف الأحمر</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    ارفع صورة كود الظرف الأحمر للحصول على الخصم
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    placeholder="رفع صورة الظرف الأحمر"
                  />
                </div>
              </div>
            </Card>

            {/* Order Summary */}
            <Card className="card-educational p-6">
              <h3 className="text-xl font-bold text-primary mb-6">ملخص الطلب</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>المجموع الفرعي</span>
                  <span>280 ج.م</span>
                </div>
                <div className="flex justify-between text-success">
                  <span>خصم الظرف الأحمر</span>
                  <span>-56 ج.م</span>
                </div>
                <div className="flex justify-between">
                  <span>رسوم التوصيل</span>
                  <span>25 ج.م</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold text-primary">
                  <span>الإجمالي</span>
                  <span>249 ج.م</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-gradient-to-r from-primary to-educational">
                  تأكيد الطلب
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  سيتم مراجعة طلبك خلال 24 ساعة
                </p>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentStore;
