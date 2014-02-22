/* global FORBANNAD */
/* jshint -W100 */
(function () {
	'use strict';

	// This piece will not fetch any live data from SCB, since many of the
	// numbers are from sources not (yet) available through their API.

	var YEARS = [
		'1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959',
		'1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969',
		'1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979',
		'1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
		'1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
		'2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
		'2010', '2011', '2012'
	];

	var HEADERS_1 = ['År', 'Antal timmar på en arbetsvecka'];
	var dataArray1 = [
		/* 1950 */ [48],
		/* 1951 */ [48],
		/* 1952 */ [48],
		/* 1953 */ [48],
		/* 1954 */ [48],
		/* 1955 */ [48],
		/* 1956 */ [48],
		/* 1957 */ [48],
		/* 1958 */ [45],
		/* 1959 */ [45],
		/* 1960 */ [45],
		/* 1961 */ [45],
		/* 1962 */ [45],
		/* 1963 */ [45],
		/* 1964 */ [45],
		/* 1965 */ [45],
		/* 1966 */ [45],
		/* 1967 */ [42.5],
		/* 1968 */ [42.5],
		/* 1969 */ [42.5],
		/* 1970 */ [40],
		/* 1971 */ [40],
		/* 1972 */ [40],
		/* 1973 */ [40],
		/* 1974 */ [40],
		/* 1975 */ [40],
		/* 1976 */ [40],
		/* 1977 */ [40],
		/* 1978 */ [40],
		/* 1979 */ [40],
		/* 1980 */ [40],
		/* 1981 */ [40],
		/* 1982 */ [40],
		/* 1983 */ [40],
		/* 1984 */ [40],
		/* 1985 */ [40],
		/* 1986 */ [40],
		/* 1987 */ [40],
		/* 1988 */ [40],
		/* 1989 */ [40],
		/* 1990 */ [40],
		/* 1991 */ [40],
		/* 1992 */ [40],
		/* 1993 */ [40],
		/* 1994 */ [40],
		/* 1995 */ [40],
		/* 1996 */ [40],
		/* 1997 */ [40],
		/* 1998 */ [40],
		/* 1999 */ [40],
		/* 2000 */ [40],
		/* 2001 */ [40],
		/* 2002 */ [40],
		/* 2003 */ [40],
		/* 2004 */ [40],
		/* 2005 */ [40],
		/* 2006 */ [40],
		/* 2007 */ [40],
		/* 2008 */ [40],
		/* 2009 */ [40],
		/* 2010 */ [40],
		/* 2011 */ [40],
		/* 2012 */ [40]
	];

	var HEADERS_2 = ['År', 'BNP per capita'];
	var dataArray2 = [
		/* 1950 */ [4900],
		/* 1951 */ [6000],
		/* 1952 */ [6400],
		/* 1953 */ [6600],
		/* 1954 */ [7000],
		/* 1955 */ [7400],
		/* 1956 */ [8000],
		/* 1957 */ [8500],
		/* 1958 */ [8900],
		/* 1959 */ [9500],
		/* 1960 */ [10200],
		/* 1961 */ [11100],
		/* 1962 */ [12000],
		/* 1963 */ [12900],
		/* 1964 */ [14300],
		/* 1965 */ [15500],
		/* 1966 */ [16700],
		/* 1967 */ [18000],
		/* 1968 */ [19000],
		/* 1969 */ [20500],
		/* 1970 */ [22800],
		/* 1971 */ [24500],
		/* 1972 */ [26700],
		/* 1973 */ [29600],
		/* 1974 */ [33400],
		/* 1975 */ [39000],
		/* 1976 */ [44000],
		/* 1977 */ [47700],
		/* 1978 */ [53000],
		/* 1979 */ [59300],
		/* 1980 */ [67200],
		/* 1981 */ [73400],
		/* 1982 */ [80200],
		/* 1983 */ [89900],
		/* 1984 */ [100800],
		/* 1985 */ [109600],
		/* 1986 */ [119800],
		/* 1987 */ [129500],
		/* 1988 */ [140700],
		/* 1989 */ [155100],
		/* 1990 */ [169000],
		/* 1991 */ [180900],
		/* 1992 */ [179400],
		/* 1993 */ [180400],
		/* 1994 */ [191200],
		/* 1995 */ [205000],
		/* 1996 */ [209700],
		/* 1997 */ [218500],
		/* 1998 */ [228800],
		/* 1999 */ [241400],
		/* 2000 */ [255300],
		/* 2001 */ [264000],
		/* 2002 */ [273800],
		/* 2003 */ [284100],
		/* 2004 */ [295900],
		/* 2005 */ [306700],
		/* 2006 */ [324300],
		/* 2007 */ [341700],
		/* 2008 */ [347600],
		/* 2009 */ [334000],
		/* 2010 */ [355900],
		/* 2011 */ [368400],
		/* 2012 */ [371500]
	];

	var HEADERS_3 = ['År', 'Produktivitet'];
	var dataArray3 = [
		//          GDP           / Hours worked
		/* 1950 */ [34195000000   / 6505975300],
		/* 1951 */ [42124000000   / 6491645300],
		/* 1952 */ [45826000000   / 6435878800],
		/* 1953 */ [47382000000   / 6365440600],
		/* 1954 */ [50202000000   / 6437879500],
		/* 1955 */ [53975000000   / 6492900100],
		/* 1956 */ [58664000000   / 6494137800],
		/* 1957 */ [62658000000   / 6517809200],
		/* 1958 */ [66191000000   / 6468060900],
		/* 1959 */ [70514000000   / 6461809100],
		/* 1960 */ [76705000000   / 6589630000],
		/* 1961 */ [83444000000   / 6650830000],
		/* 1962 */ [90496000000   / 6645430000],
		/* 1963 */ [97950000000   / 6655670000],
		/* 1964 */ [109233000000  / 6642520000],
		/* 1965 */ [120204000000  / 6648580000],
		/* 1966 */ [130753000000  / 6606880000],
		/* 1967 */ [141925000000  / 6422910000],
		/* 1968 */ [150607000000  / 6338520000],
		/* 1969 */ [163557000000  / 6373060000],
		/* 1970 */ [183153000000  / 6418160000],
		/* 1971 */ [198029000000  / 6288960000],
		/* 1972 */ [216686000000  / 6158220000],
		/* 1973 */ [241130000000  / 6123980000],
		/* 1974 */ [272378000000  / 6173170000],
		/* 1975 */ [319869000000  / 6200750000],
		/* 1976 */ [361782000000  / 6258650000],
		/* 1977 */ [393493000000  / 6165740000],
		/* 1978 */ [438619000000  / 6031890000],
		/* 1979 */ [491639000000  / 6077050000],
		/* 1980 */ [558580000000  / 6452800000],
		/* 1981 */ [610305000000  / 6427340000],
		/* 1982 */ [667670000000  / 6475370000],
		/* 1983 */ [749024000000  / 6529770000],
		/* 1984 */ [840046000000  / 6593510000],
		/* 1985 */ [914767000000  / 6679000000],
		/* 1986 */ [1002401000000 / 6711560000],
		/* 1987 */ [1087476000000 / 6809730000],
		/* 1988 */ [1187313000000 / 6990650000],
		/* 1989 */ [1317353000000 / 7087380000],
		/* 1990 */ [1446639000000 / 7135980000],
		/* 1991 */ [1558833000000 / 6969320000],
		/* 1992 */ [1555130000000 / 6734930000],
		/* 1993 */ [1572541000000 / 6547000000],
		/* 1994 */ [1678588000000 / 6619000000],
		/* 1995 */ [1809575000000 / 6783000000],
		/* 1996 */ [1853915000000 / 6781000000],
		/* 1997 */ [1932988000000 / 6752000000],
		/* 1998 */ [2025024000000 / 6841000000],
		/* 1999 */ [2138421000000 / 6980000000],
		/* 2000 */ [2265447000000 / 7072000000],
		/* 2001 */ [2348419000000 / 7136000000],
		/* 2002 */ [2443630000000 / 7040000000],
		/* 2003 */ [2544867000000 / 6960000000],
		/* 2004 */ [2660957000000 / 6934000000],
		/* 2005 */ [2769375000000 / 6947000000],
		/* 2006 */ [2944480000000 / 7081000000],
		/* 2007 */ [3126018000000 / 7321000000],
		/* 2008 */ [3204320000000 / 7367000000],
		/* 2009 */ [3089181000000 / 7181000000],
		/* 2010 */ [3306271000000 / 7323000000],
		/* 2011 */ [3480543000000 / 7467000000],
		/* 2012 */ [3548783000000 / 7514000000]
	];

	FORBANNAD.loadChart(drawChart);

	// This will draw the chart based on the static JavaScript objects above.
	function drawChart() {
		// Add year header to each row of each array.
		$.each([dataArray1, dataArray2, dataArray3], function (index, array) {
			$.each(array, function (index, element) {
				element.unshift(YEARS[index]);
			});
		});

		// Add header row to data tables.
		dataArray1.unshift(HEADERS_1);
		dataArray2.unshift(HEADERS_2);
		dataArray3.unshift(HEADERS_3);

		var chartData1 = google.visualization.arrayToDataTable(dataArray1);
		var chartData2 = google.visualization.arrayToDataTable(dataArray2);
		var chartData3 = google.visualization.arrayToDataTable(dataArray3);

		var additionalChartOptions = {
			colors: FORBANNAD.defaultColors,
			lineWidth: FORBANNAD.lineWidths.medium
		};

		var chartOptions1 = $.extend({}, additionalChartOptions, {
			vAxis: { viewWindow: { min: 30, max: 50 }}
		});

		var chartOptions2 = $.extend({}, additionalChartOptions, {
			vAxis: { format: FORBANNAD.vAxisFormats.sek }
		});

		var chartOptions3 = $.extend({}, additionalChartOptions, {
			vAxis: { format: FORBANNAD.vAxisFormats.sek }
		});

		var formatter = new google.visualization.NumberFormat(FORBANNAD.numberFormats.sek);

		formatter.format(chartData2, 1);
		formatter.format(chartData3, 1);

		var chart1 = new google.visualization.LineChart(document.getElementById('chart1'));
		chart1.draw(chartData1, $.extend({}, FORBANNAD.defaultChartOptions, chartOptions1));

		var chart2 = new google.visualization.LineChart(document.getElementById('chart2'));
		chart2.draw(chartData2, $.extend({}, FORBANNAD.defaultChartOptions, chartOptions2));

		var chart3 = new google.visualization.LineChart(document.getElementById('chart3'));
		chart3.draw(chartData3, $.extend({}, FORBANNAD.defaultChartOptions, chartOptions3));
	}
}());
