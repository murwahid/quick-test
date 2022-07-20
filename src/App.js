import './App.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      {/* NAVIGATION */}
      <NavBar />
      <div class="container d-flex justify-content around mt-3">
        <div class="card-body bg-light m-1">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted"> Card Subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content
          </p>
        </div>
        <div class="card-body bg-light m-1">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted"> Card Subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content
          </p>
        </div>
        <div class="card-body bg-light m-1">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted"> Card Subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content
          </p>
        </div>
      </div>


    </div>
  );
}

export default App;
