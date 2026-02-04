import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ProfileCard
        name = "Parmeet"
        bio = "CSE Student learning React"
        imageUrl = "/my-pic- 3.jpeg"
        links={[
          { label: "GitHub", url: "https://github.com/ParmeetBhamrah" },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/parmeetsinghbhamrah/" },
        ]}
      />
    </div>
  );
}

export default App;