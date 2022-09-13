import "./App.css";
import BookingForm from "./bookingForm/BookingForm";
import "./components/image/back-img.jpg";
import image from "./components/image/back-img.jpg";

const myStyle = {
  //   backgroundImage:
  // "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
  //   height:'100vh',
  //   marginTop:'-50px',
  //   fontSize:'20px',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
};

function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat" }}>
      <BookingForm />
    </div>
  );
}

export default App;
