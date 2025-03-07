
function Card({tittle , description , image}){

    return (
         <div style={styles.card}>
          <img src={image} alt="Card" style={styles.image} />
          <h2 style={styles.title}>{tittle}</h2>
          <p style={styles.description}>{description}</p>
          <button style={styles.button}>Click</button>
        </div>
      )
    };
    
    const styles = {
        
      card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      image: {
        width: '100%',
        borderRadius: '8px',
        height: '200px',
        objectFit: 'cover',
      },
      title: {
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '10px 0',
      },
      description: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '20px',
      },
      button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      },

}



export default Card