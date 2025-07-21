import { redirect } from 'next/navigation';
export default function Home() {
  // return (
  // <div className="bg-primary  sm:bg-yellow-500 md:bg-blue-500   font-SubHeading">Hello World</div>
  // );

   redirect('/home');
}
