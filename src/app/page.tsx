import { Metadata } from 'next';
import RentACarComponent from '@/components/RentACar';
import HeroComponent from './../components/Hero';
import FeaturesComponent from '@/components/Feature';
import FutureTransportation from '@/components/Future';
import UsersAppComponent from '@/components/UserApps';
import BetterTogetherComponent from '@/components/Trips';

export default function Home() {
  return (
    <main className="">
      <HeroComponent />
      <FeaturesComponent />
      <RentACarComponent />
      <FutureTransportation />
      <UsersAppComponent />
      <BetterTogetherComponent />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Treepz: Africa's Leading Corporate Mobility Solution.",
    description: "Treepz is Africa’s largest corporate mobility startup serving more than 5 million customers across 4 countries including Nigeria, Kenya, Ghana and Uganda. From commuter shuttling to large-scale vehicle rentals, we serve thousands of customers daily across 16 cities in Africa."
};


