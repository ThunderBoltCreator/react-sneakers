import 'macro-css';

function App() {
   return (
      <div className="wrapper clear">
         <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
               <img width={40} height={40} src="./img/logo.png"/>
               <div>
                  <h3 className="text-uppercase">REACT SNEAKERS</h3>
                  <p>Магазин лучших кроссовок</p>
               </div>
            </div>
            <ul className="headerRight d-flex">
               <li>
                  <img width={18} height={18} src="./img/cart.svg"/>
                  <span>1205 руб.</span>
               </li>
               <li>
                  <img width={21} height={19} src="./img/favorite.svg"/>
               </li>
               <li>
                  <img width={20} height={20} src=".//img/user.svg"/>
               </li>
            </ul>
         </header>
         <div className="content p-40">
            <h1 className="mb-30">Все кроссовки</h1>

            <div className="Sneakers">
               <div className="card">
                  <img width={133} height={112} src="./img/Sneakers/1.jpg" alt="Sneakers"/>
                  <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button></button>
                  </div>
               </div>
               <div className="card">
                  <img width={133} height={112} src="./img/Sneakers/2.jpg" alt="Sneakers"/>
                  <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button></button>
                  </div>
               </div>
               <div className="card">
                  <img width={133} height={112} src="./img/Sneakers/3.jpg" alt="Sneakers"/>
                  <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button></button>
                  </div>
               </div>
               <div className="card">
                  <img width={133} height={112} src="./img/Sneakers/4.jpg" alt="Sneakers"/>
                  <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <div className="d-flex justify-between align-center">
                     <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>12 999 руб.</b>
                     </div>
                     <button></button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
