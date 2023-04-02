import './App.css';
import Resume from './components/Resume';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const handlePrint = () => {
    window.print();
  };

  const downloadPDF = () => {
    const input = document.getElementById("resume");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div>
        <div className="app__header">
        <button className="app__button" onClick={handlePrint}>Print</button>
        <button className="app__button" onClick={downloadPDF}>Download PDF</button>
      </div>
      <Resume />
    </div>
  );
}

export default App;
