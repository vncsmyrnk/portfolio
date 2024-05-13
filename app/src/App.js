import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-section"></div>
      <div className="content-section">
        <div className="title-section text-right">
          <p className="main-sentence text-7xl font-bold">Powering the digital world from behind the scenes</p>
          <p className="description text-gray-800 text-4xl mt-4">I build scalable, secure, and seamless backend infrastructures</p>
        </div>
        <div className="description-section mt-8">
          <div className="description-text text-gray-800">
            <p>I am a backend developer specialized in crafting robust APIs using an arsenal of tools including Python, Java, and Node.js. With a deep understanding of backend principles and concepts, I am proficient in implementing SOLID principles, RESTful architecture, and clean code practices to engineer scalable and efficient solutions.</p>
          </div>
          <button class="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Check out
          </button>
        </div>
      </div>
      <div></div>
      <div className="footer-section"></div>
    </div>
  );
}

export default App;
