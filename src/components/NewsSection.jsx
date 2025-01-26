/* eslint-disable react/prop-types */
const NewsSection = ({ news }) => {

  const isActived = (date) => {
    const today = new Date();
    const newsEndDate = new Date(date.split("/").reverse().join("-"));
    return today < newsEndDate;
  }


  return (
    <section className="container px-4" style={{ "marginTop": "3rem" }}>
      <div className="text-center mb-5">
        <h2 className="news-title mb-0">Novidades da AusTv</h2>
        <p className="news-description">
          Fique ligado nas principais notícias do servidor.
        </p>
      </div>
      {news.map((content, i) => (
        <div key={i} className="row column-gap-5 mb-4">
            <div className="col p-2 g-col-6">
                <img src={content.image} alt={content.title} className='object-fit-fill w-100 rounded'></img>
            </div>
            <div className="col p-3 g-col-6">
                <p className="news-title fw-bold fs-4 mb-0">{content.title}</p>
                <div className="list-inline mt-0">
                    <p className="news-type fw-bold list-inline-item" style={{"color": content.type.color}}>📣 {content.type.text}</p>
                    <p className="news-separator list-inline-item"></p>
                    <p className="news-date list-inline-item">🗓️ {content.date}</p>
                    {isActived(content.endDate) && (
                      <>
                        <p className="news-separator list-inline-item"></p>
                        <p className="news-date list-inline-item" style={{"color": "#00D26A"}}>🟢 Ativo</p>
                      </>
                    )}
                </div>
                <p className="news-description">{content.description}</p>
            </div>
        </div>
      ))}
    </section>
  );
};

export default NewsSection;
