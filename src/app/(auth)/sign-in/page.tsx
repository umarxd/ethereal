import SignIn from "@/components/SignIn";

const page = () => {
  return (
    <div className="absolute inset-0 h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
      <SignIn />
    </div>
  );
};

export default page;
