import '../../CSS/FireMapComponent.css';
const Firemap = () => {
  
  return <div className="fire-map-component" style={{position:'relative',height:'90vh',width:'100%',top:'120px'}}>
      <h1 className="title">Bản đồ theo dõi cháy rừng</h1>
      <iframe src='./PublicAssets/EmbeddedHTML/FireMap.html' title='map' 
      style={{width:'100vw',height:'100vh'}}></iframe>
  </div>;
};

export default Firemap;
