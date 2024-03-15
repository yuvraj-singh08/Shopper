import Carousel from "@/components/Carousel/Carousel";
import Card from "@/components/Card/Card";
import Category from "@/components/Category/Category";
import { products, electronics } from '@/app/product/[id]/products'; 
export default function Home() {

  return (
    <>
      <div className="bg-red-50">
        <div className="container px-0 bg-white">
          <Category />
          <Carousel />
          <div className="electornics-container py-2 font-semibold">
            <div className="text-2xl ml-4 mt-2">
              Best of Electronics
            </div>
            <div className="flex justify-between my-4">
              {
                electronics.map((product, index) => {
                  return (
                    <Card
                      key={index}
                      name={product.name}
                      imgSrc={product.imgSrc}
                      discount={product.about}
                      site={product.site}
                      productId={product.productId}
                    />
                  )
                })
              }
            </div>
          </div>
          <div className="clothes-container font-semibold">
            <div className="text-bold text-2xl ml-4 mt-2">
              Fashion Top Deals
            </div>
            <div className="flex justify-between my-4">
              {
                products.map((product, index) => {
                  return (
                    <Card key={index} name={product.name} imgSrc={product.imgSrc} discount={product.discount} site={product.site} productId={product.productId} />
                  )
                })
              }
            </div>
          </div>
          <div className="clothes-container font-semibold">
            <div className="text-bold text-2xl ml-4 mt-2">
              Top Deals
            </div>
            <div className="flex justify-between my-4">
              {
                products.map((product, index) => {
                  return (
                    <Card key={index} name={product.name} imgSrc={product.imgSrc} discount={product.discount} site={product.site} productId={""} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
