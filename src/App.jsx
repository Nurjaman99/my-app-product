import Header from './component/Header';
import Article from './component/Article';
import Product from './component/product';

function App() {
  return (
    <>
      <div className={'flex h-24 bg-sky-900 py-8 px-32 justify-between'}>
        <Header />
      </div>
      <div className={'flex h-96 bg-sky-900 py-8 px-32'}>
        <Article />
        <div className={'w-full h-full justify-center hidden lg:flex'}>
          <img className="h-96" src="src/assets/image-1.png" alt="img" />
        </div>
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32'}>
        <Product />
      </div>
      <div className={'flex h-20 bg-sky-900 py-8 px-32 justify-between'}>
      </div>

    </>
  );
}

export default App
