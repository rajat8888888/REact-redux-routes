import React from 'react';
import { HomeContainer } from "../component/HomeContainer";
export const Home = () => {
    const item = {
        id: "002",
        image: "images/1.jpg",
        company: "CUKOO",
        item_name: "Women Padded Halter Neck Swimming Dress",
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: "10 Oct 2023",
        rating: {
          stars: 4.3,
          count: 24,
        },
      };
    
  return (
    <div className="items-container">
    <HomeContainer item={item}></HomeContainer>
  </div>
  )
}
