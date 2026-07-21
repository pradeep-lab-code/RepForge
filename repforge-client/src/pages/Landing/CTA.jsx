import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="bg-primary rounded-3xl p-12 text-center">

        <h2 className="text-4xl font-bold text-white">
          Ready To Transform Your Fitness Journey?
        </h2>

        <p className="text-white/80 mt-5 max-w-2xl mx-auto leading-8">
          Join RepForge today and let AI build personalized workout
          plans while you stay focused on becoming stronger every day.
        </p>

        <div className="flex justify-center gap-5 mt-10 flex-wrap">

          <Link to="/signup" className="w-50 ">
            <Button
              className="bg-white flex-1 !text-primary hover:bg-gray-100"
            >
              Get Started
            </Button>
          </Link>

          <Link to="/login" className="w-40">
            <Button
              variant="outline"
              className="border-white  !text-white hover:bg-white hover:!text-primary"
            >
              Login
            </Button>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default CTA;