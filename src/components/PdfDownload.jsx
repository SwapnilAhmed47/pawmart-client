import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const PdfDownload = () => {
  const handleDownload = () => {
    const doc = new jsPDF();

    autoTable(doc, {
      head: [["Name", "Email", "Country"]],
      body: [
        ["David", "david@example.com", "Sweden"],
        ["Castille", "castille@example.com", "Spain"],
      ],
    });

    doc.save("table.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Download PDF
    </button>
  );
};

export default PdfDownload;
