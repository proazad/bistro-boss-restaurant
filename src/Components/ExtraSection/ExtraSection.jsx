import bg from "../../assets/home/chef-service.jpg";
const ExtraSection = () => {
  return (
    <div className="bg-blue-400 lg:my-24 lg:p-20 bg-cover" style={{backgroundImage:`url(${bg})`}}>
      <div className="max-w-5xl mx-auto bg-white text-center p-10">
        <h1 className="text-4xl font-semibold mb-4">Bistro Boss</h1>
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          quasi quo sit sint exercitationem dolores, deserunt iusto dolorem
          voluptate veritatis reiciendis! Impedit, aliquam aperiam debitis
          consequuntur quod reprehenderit labore obcaecati nihil, fuga earum
          fugiat eum, alias minima iusto voluptatibus necessitatibus aut culpa
          atque ratione. Animi nesciunt sunt id ducimus mollitia!
        </p>
      </div>
    </div>
  );
};

export default ExtraSection;
