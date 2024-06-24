import "./FiyatListesiTable.css";
import PropTypes from "prop-types";
function FiyatListesiTable({ tedavi }) {
  return (
    <div className="table-container">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Tedavi Adı</th>
            <th scope="col">TL Fiyat Aralığı</th>
          </tr>
        </thead>
        <tbody>
          {tedavi.map((item, index) => (
            <tr key={index}>
              <td>{item.Tedavi}</td>
              <td>{item.fiyat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

FiyatListesiTable.propTypes = {
  tedavi: PropTypes.arrayOf(
    PropTypes.shape({
      Tedavi: PropTypes.string.isRequired,
      fiyat: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FiyatListesiTable;
