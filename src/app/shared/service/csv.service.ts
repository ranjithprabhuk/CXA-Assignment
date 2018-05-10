import {Injectable} from '@angular/core';

@Injectable()
export class  CsvService {

    // Download CSV
    public download(data: any, filename: string) {
        const csvData = this.ConvertToCSV(data);
        const anchorElement: any = document.createElement('a');
        anchorElement.setAttribute('style', 'display:none;');
        document.body.appendChild(anchorElement);
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        anchorElement.href = url;

        const isIE = false || !!(<any> document).documentMode;

        if (isIE) {
            const retVal = navigator.msSaveBlob(blob, `${filename}.csv`);
        } else {
            anchorElement.download = `${filename}.csv`;
        }

        anchorElement.click();
    }


    // convert Json to CSV data
    private ConvertToCSV(jsonData: any) {
            const array = typeof jsonData !== 'object' ? JSON.parse(jsonData) : jsonData;
            let str = '';
            let row = '';

            for (let index in jsonData[0]) {
                // Now convert each value to string and comma-seprated
                row += index + ',';
            }
            row = row.slice(0, -1);
            // append Label row with line break
            str += row + '\r\n';

            for (let i = 0; i < array.length; i++) {
                let line = '';
                for (let index in array[i]) {
                    if (line != '') line += ',';
                    line += '"'+array[i][index]+'"';
                }

                str += line + '\r\n';
            }
            return str;
        }
}
