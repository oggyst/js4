function run(max, min) 
{
    const intNumberOfRows = document.getElementById('numberOfColumns').value;
    const intNumberOfColumns = document.getElementById('numberOfRows').value;
    if (intNumberOfRows == "" || intNumberOfColumns == "") 
    {
        alert('Please fill required fields.');
    } else if (intNumberOfRows < 1 || intNumberOfColumns < 1)
        alert('All numbers must be 1 or greater');
    else 
    {
        let arrRowNumbers = [];
        let arrColumnNumbers = [];
        let arrMatrix = [[]];
        let intArrayAverage = 0;
        document.write('<style>td{border:1px solid black;}</style><table><tr><td></td>');
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            arrRowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
            intArrayAverage = intArrayAverage + arrRowNumbers[i];
        }
        intArrayAverage = intArrayAverage / arrRowNumbers.length;

        for (var i = 0; i < intNumberOfRows; i++) 
        {
            arrColumnNumbers[i] = (Math.floor(Math.random() * (max - intArrayAverage) + intArrayAverage));
            document.write('<td>' + arrColumnNumbers[i] + '</td>');
        }
        document.write('</tr>');
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            intArrayAverage = 0;
            document.write('<tr>')
            arrMatrix[i] = [];
            document.write('<td>' + arrRowNumbers[i] + '</td>');
            for (var j = 0; j < intNumberOfRows; j++) 
            {
                arrMatrix[i][j] = arrRowNumbers[i] * arrColumnNumbers[j];
                intArrayAverage = intArrayAverage + arrMatrix[i][j];
                document.write('<td>' + arrMatrix[i][j] + '</td>');
            }
            intArrayAverage = intArrayAverage / intNumberOfRows;
            document.write('<td> In this column average is ' + Math.floor(intArrayAverage));
            document.write('</tr>');
        }
        document.write ('</table>');
        for (var i = 0; i < intNumberOfRows; i++) 
        {
            intArrayRowAverage = 0;
            for (var j = 0; j < intNumberOfColumns; j++) 
            {
                intArrayRowAverage += arrMatrix[j][i];
                console.log(intArrayAverage);
            }
            intArrayRowAverage = intArrayRowAverage / intNumberOfColumns;
            document.write(i + 1 + '. row average is ' + Math.floor(intArrayRowAverage) + '<br>');
        }
    }
}
