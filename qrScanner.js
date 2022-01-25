var randomFloat = null;
var ipAddress = null;
var port = null;

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    var resultContainer = document.getElementById('result');
    var lastResult, countResults = 0;

    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 });

    function onScanSuccess(decodedText, decodedResult) {
        //if (decodedText !== lastResult) {
        //    ++countResults;
        //    lastResult = decodedText;
            try {
                var arrayString = decodedText.split(" ");
                randomFloat = `${arrayString[0]}`;
                arrayString = arrayString[1].split(":");
                ipAddress = `${arrayString[0]}`;
                port = `${arrayString[1]}`;

                resultContainer.innerHTML = "Thank you for using Emotional Films";

                // Optional: To close the QR code scannign after the result is found
                html5QrcodeScanner.clear();
            } catch (error) {
                resultContainer.innerHTML = "Invalid QR code";

            }
            //console.log(`Scan result = ${decodedText}`, decodedResult);

        //}
    }

    // Optional callback for error, can be ignored.
    function onScanError(qrCodeError) {
        // This callback would be called in case of qr code scan error or setup error.
        // You can avoid this callback completely, as it can be very verbose in nature.
    }

    html5QrcodeScanner.render(onScanSuccess, onScanError);
});