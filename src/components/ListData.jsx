import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/list.css";

function ListData() {
  return (
    <div className="pt-2 min-height-content">
      <div className="container">
        <div className="p-5 mt-5 rounded card section-padding custom-card">
          <div className="row row-cols-2">
            <div className="col mt-2">
              <h2>
                <b style={{ fontFamily: "Dancing Script, cursive" }}>
                  List Data
                </b>
              </h2>
            </div>
            <div className="col mt-2 mb-4 d-flex justify-content-end">
              <Button variant="success">Tambah Data</Button>
            </div>
          </div>
          <div className="row">
            <div className="table-responsive text-center">
              <table className="table colors table-bordered">
                <thead>
                  <tr>
                    <th rowSpan={2} style={{ verticalAlign: 'middle' }}>No</th>
                    <th rowSpan={2} style={{ verticalAlign: 'middle' }}>No Order</th>
                    <th rowSpan={2} style={{ verticalAlign: 'middle' }}>No SPK/</th>
                    <th rowSpan={2} style={{ verticalAlign: 'middle' }}>Nama Pelanggan</th>
                    <th rowSpan={2} style={{ verticalAlign: 'middle' }}>Sub Portfolio</th>
                    <th rowSpan={2} style={{ verticalAlign: 'middle' }}>Nilai</th>
                    <th colSpan={3}>Contact Person</th>    
                    <th rowSpan={2} style={{ verticalAlign: 'middle' }}>Action</th>
                  </tr>
                  <tr>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>No Hp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm btn-success me-1"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm me-1"
                      >
                        Edit
                      </button>
                      <button type="button" className="btn btn-danger btn-sm">
                        Hapus
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListData;
