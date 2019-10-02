function example () {
  // example of features

  let landsat = {
    "type": "Feature",
    "id": "LC82250712019271",
    "bbox": [
      -55.19787,
      -16.97781,
      -53.0092,
      -14.82839
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            -54.776706538930185,
            -14.830571533943228
          ],
          [
            -53.010147895066865,
            -15.224733233019823
          ],
          [
            -53.42942284955384,
            -16.97521898603889
          ],
          [
            -55.195667815651056,
            -16.577461529627698
          ],
          [
            -54.776706538930185,
            -14.830571533943228
          ]
        ]
      ]
    },
    "properties": {
      "collection": "landsat-8-l1",
      "eo:gsd": 15,
      "eo:platform": "landsat-8",
      "eo:instrument": "OLI_TIRS",
      "eo:off_nadir": 0,
      "eo:bands": [
        {
          "name": "B1",
          "common_name": "coastal",
          "gsd": 30,
          "center_wavelength": 0.44,
          "full_width_half_max": 0.02
        },
        {
          "name": "B2",
          "common_name": "blue",
          "gsd": 30,
          "center_wavelength": 0.48,
          "full_width_half_max": 0.06
        },
        {
          "name": "B3",
          "common_name": "green",
          "gsd": 30,
          "center_wavelength": 0.56,
          "full_width_half_max": 0.06
        },
        {
          "name": "B4",
          "common_name": "red",
          "gsd": 30,
          "center_wavelength": 0.65,
          "full_width_half_max": 0.04
        },
        {
          "name": "B5",
          "common_name": "nir",
          "gsd": 30,
          "center_wavelength": 0.86,
          "full_width_half_max": 0.03
        },
        {
          "name": "B6",
          "common_name": "swir16",
          "gsd": 30,
          "center_wavelength": 1.6,
          "full_width_half_max": 0.08
        },
        {
          "name": "B7",
          "common_name": "swir22",
          "gsd": 30,
          "center_wavelength": 2.2,
          "full_width_half_max": 0.2
        },
        {
          "name": "B8",
          "common_name": "pan",
          "gsd": 15,
          "center_wavelength": 0.59,
          "full_width_half_max": 0.18
        },
        {
          "name": "B9",
          "common_name": "cirrus",
          "gsd": 30,
          "center_wavelength": 1.37,
          "full_width_half_max": 0.02
        },
        {
          "name": "B10",
          "common_name": "lwir11",
          "gsd": 100,
          "center_wavelength": 10.9,
          "full_width_half_max": 0.8
        },
        {
          "name": "B11",
          "common_name": "lwir12",
          "gsd": 100,
          "center_wavelength": 12,
          "full_width_half_max": 1
        }
      ],
      "datetime": "2019-09-28T13:39:47.396435+00:00",
      "eo:sun_azimuth": 65.03280426,
      "eo:sun_elevation": 60.15386224,
      "eo:cloud_cover": 5,
      "eo:row": "071",
      "eo:column": "225",
      "landsat:product_id": "LC08_L1TP_225071_20190928_20190930_01_RT",
      "landsat:scene_id": "LC82250712019271LGN00",
      "landsat:processing_level": "L1TP",
      "landsat:tier": "RT",
      "landsat:revision": "00",
      "eo:epsg": 32721
    },
    "assets": {
      "index": {
        "type": "text/html",
        "title": "HTML index page",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_MTL.txt"
      },
      "thumbnail": {
        "title": "Thumbnail image",
        "type": "image/jpeg",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_thumb_large.jpg"
      },
      "B1": {
        "type": "image/x.geotiff",
        "eo:bands": [
          0
        ],
        "title": "Band 1 (coastal)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B1.TIF"
      },
      "B2": {
        "type": "image/x.geotiff",
        "eo:bands": [
          1
        ],
        "title": "Band 2 (blue)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B2.TIF"
      },
      "B3": {
        "type": "image/x.geotiff",
        "eo:bands": [
          2
        ],
        "title": "Band 3 (green)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B3.TIF"
      },
      "B4": {
        "type": "image/x.geotiff",
        "eo:bands": [
          3
        ],
        "title": "Band 4 (red)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B4.TIF"
      },
      "B5": {
        "type": "image/x.geotiff",
        "eo:bands": [
          4
        ],
        "title": "Band 5 (nir)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B5.TIF"
      },
      "B6": {
        "type": "image/x.geotiff",
        "eo:bands": [
          5
        ],
        "title": "Band 6 (swir16)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B6.TIF"
      },
      "B7": {
        "type": "image/x.geotiff",
        "eo:bands": [
          6
        ],
        "title": "Band 7 (swir22)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B7.TIF"
      },
      "B8": {
        "type": "image/x.geotiff",
        "eo:bands": [
          7
        ],
        "title": "Band 8 (pan)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B8.TIF"
      },
      "B9": {
        "type": "image/x.geotiff",
        "eo:bands": [
          8
        ],
        "title": "Band 9 (cirrus)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B9.TIF"
      },
      "B10": {
        "type": "image/x.geotiff",
        "eo:bands": [
          9
        ],
        "title": "Band 10 (lwir)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B10.TIF"
      },
      "B11": {
        "type": "image/x.geotiff",
        "eo:bands": [
          10
        ],
        "title": "Band 11 (lwir)",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_B11.TIF"
      },
      "ANG": {
        "title": "Angle coefficients file",
        "type": "text/plain",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_ANG.txt"
      },
      "MTL": {
        "title": "original metadata file",
        "type": "text/plain",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_MTL.txt"
      },
      "BQA": {
        "title": "Band quality data",
        "type": "image/x.geotiff",
        "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/225/071/LC08_L1TP_225071_20190928_20190930_01_RT/LC08_L1TP_225071_20190928_20190930_01_RT_BQA.TIF"
      }
    },
    "links": [
      {
        "rel": "self",
        "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC82250712019271"
      },
      {
        "rel": "parent",
        "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1"
      },
      {
        "rel": "collection",
        "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1"
      },
      {
        "rel": "root",
        "href": "https://sat-api.developmentseed.org/stac"
      }
    ]
  }

  let sentinel = {
    "type": "Feature",
    "id": "S2A_21LXC_20191001_0",
    "bbox": [
      -55.67902614367243,
      -16.365093740905092,
      -55.03587639429054,
      -15.368029755223816
    ],
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            -55.67902614367243,
            -16.365093740905092
          ],
          [
            -55.439191754726046,
            -15.371136957359257
          ],
          [
            -55.04546143170228,
            -15.368029755223816
          ],
          [
            -55.03587639429054,
            -16.3600775531931
          ],
          [
            -55.67902614367243,
            -16.365093740905092
          ]
        ]
      ]
    },
    "properties": {
      "collection": "sentinel-2-l1c",
      "eo:gsd": 10,
      "eo:instrument": "MSI",
      "eo:off_nadir": 0,
      "eo:bands": [
        {
          "full_width_half_max": 0.027,
          "center_wavelength": 0.4439,
          "name": "B01",
          "gsd": 60,
          "common_name": "coastal"
        },
        {
          "full_width_half_max": 0.098,
          "center_wavelength": 0.4966,
          "name": "B02",
          "gsd": 10,
          "common_name": "blue"
        },
        {
          "full_width_half_max": 0.045,
          "center_wavelength": 0.56,
          "name": "B03",
          "gsd": 10,
          "common_name": "green"
        },
        {
          "full_width_half_max": 0.038,
          "center_wavelength": 0.6645,
          "name": "B04",
          "gsd": 10,
          "common_name": "red"
        },
        {
          "full_width_half_max": 0.019,
          "center_wavelength": 0.7039,
          "name": "B05",
          "gsd": 20
        },
        {
          "full_width_half_max": 0.018,
          "center_wavelength": 0.7402,
          "name": "B06",
          "gsd": 20
        },
        {
          "full_width_half_max": 0.028,
          "center_wavelength": 0.7825,
          "name": "B07",
          "gsd": 20
        },
        {
          "full_width_half_max": 0.145,
          "center_wavelength": 0.8351,
          "name": "B08",
          "gsd": 10,
          "common_name": "nir"
        },
        {
          "full_width_half_max": 0.033,
          "center_wavelength": 0.8648,
          "name": "B8A",
          "gsd": 20
        },
        {
          "full_width_half_max": 0.026,
          "center_wavelength": 0.945,
          "name": "B09",
          "gsd": 60
        },
        {
          "full_width_half_max": 0.075,
          "center_wavelength": 1.3735,
          "name": "B10",
          "gsd": 60,
          "common_name": "cirrus"
        },
        {
          "full_width_half_max": 0.143,
          "center_wavelength": 1.6137,
          "name": "B11",
          "gsd": 20,
          "common_name": "swir16"
        },
        {
          "full_width_half_max": 0.242,
          "center_wavelength": 2.22024,
          "name": "B12",
          "gsd": 20,
          "common_name": "swir22"
        }
      ],
      "datetime": "2019-10-01T13:57:00.827000+00:00",
      "eo:platform": "sentinel-2a",
      "eo:cloud_cover": 5.88,
      "sentinel:utm_zone": 21,
      "sentinel:latitude_band": "L",
      "sentinel:grid_square": "XC",
      "sentinel:sequence": "0",
      "sentinel:product_id": "S2A_MSIL1C_20191001T135111_N0208_R024_T21LXC_20191001T153222"
    },
    "assets": {
      "thumbnail": {
        "title": "Thumbnail",
        "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/XC/2019/10/1/0/preview.jpg"
      },
      "info": {
        "title": "Basic JSON metadata",
        "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/XC/2019/10/1/0/tileInfo.json"
      },
      "metadata": {
        "title": "Complete XML metadata",
        "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/XC/2019/10/1/0/metadata.xml"
      },
      "tki": {
        "title": "True color image",
        "type": "image/jp2",
        "eo:bands": [
          3,
          2,
          1
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/TKI.jp2"
      },
      "B01": {
        "title": "Band 1 (coastal)",
        "type": "image/jp2",
        "eo:bands": [
          0
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B01.jp2"
      },
      "B02": {
        "title": "Band 2 (blue)",
        "type": "image/jp2",
        "eo:bands": [
          2
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B02.jp2"
      },
      "B03": {
        "title": "Band 3 (green)",
        "type": "image/jp2",
        "eo:bands": [
          2
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B03.jp2"
      },
      "B04": {
        "title": "Band 4 (red)",
        "type": "image/jp2",
        "eo:bands": [
          3
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B04.jp2"
      },
      "B05": {
        "title": "Band 5",
        "type": "image/jp2",
        "eo:bands": [
          4
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B05.jp2"
      },
      "B06": {
        "title": "Band 6",
        "type": "image/jp2",
        "eo:bands": [
          5
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B06.jp2"
      },
      "B07": {
        "title": "Band 7",
        "type": "image/jp2",
        "eo:bands": [
          6
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B07.jp2"
      },
      "B08": {
        "title": "Band 8 (nir)",
        "type": "image/jp2",
        "eo:bands": [
          7
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B08.jp2"
      },
      "B8A": {
        "title": "Band 8A",
        "type": "image/jp2",
        "eo:bands": [
          8
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B08.jp2"
      },
      "B09": {
        "title": "Band 9",
        "type": "image/jp2",
        "eo:bands": [
          9
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B09.jp2"
      },
      "B10": {
        "title": "Band 10 (cirrus)",
        "type": "image/jp2",
        "eo:bands": [
          10
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B10.jp2"
      },
      "B11": {
        "title": "Band 11 (swir16)",
        "type": "image/jp2",
        "eo:bands": [
          11
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B11.jp2"
      },
      "B12": {
        "title": "Band 12 (swir22)",
        "type": "image/jp2",
        "eo:bands": [
          12
        ],
        "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B11.jp2"
      }
    },
    "links": [
      {
        "rel": "self",
        "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2A_21LXC_20191001_0"
      },
      {
        "rel": "parent",
        "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c"
      },
      {
        "rel": "collection",
        "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c"
      },
      {
        "rel": "root",
        "href": "https://sat-api.developmentseed.org/stac"
      }
    ]
  }

  let cbers = {
    "id": "CBERS_4_MUX_20190910_168_116_L4",
    "type": "Feature",
    "geometry": {
      "type": "MultiPolygon",
      "coordinates": [
        [
          [
            [
              -58.159354,
              -14.763583
            ],
            [
              -57.045885,
              -14.936325
            ],
            [
              -56.803788,
              -13.874307
            ],
            [
              -57.911729,
              -13.70243
            ],
            [
              -58.159354,
              -14.763583
            ]
          ]
        ]
      ]
    },
    "bbox": [
      -58.163446,
      -14.942375,
      -56.801549,
      -13.682666
    ],
    "collection": "CBERS4MUX",
    "properties": {
      "datetime": "2019-09-10T13:51:06Z",
      "eo:sun_azimuth": 57.3973,
      "eo:sun_elevation": 55.8806,
      "eo:off_nadir": -0.00840441,
      "eo:epsg": 32757,
      "eo:instrument": "MUX",
      "cbers:data_type": "L4",
      "cbers:path": 168,
      "cbers:row": 116
    },
    "links": [
      {
        "rel": "self",
        "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4.json"
      },
      {
        "rel": "parent",
        "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/168/116/catalog.json"
      },
      {
        "rel": "collection",
        "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
      }
    ],
    "assets": {
      "thumbnail": {
        "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116.jpg",
        "type": "image/jpeg"
      },
      "metadata": {
        "href": "s3://cbers-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116_L4_BAND6.xml",
        "title": "INPE original metadata",
        "type": "text/xml"
      },
      "B5": {
        "href": "s3://cbers-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116_L4_BAND5.tif",
        "type": "image/vnd.stac.geotiff; cloud-optimized=true",
        "eo:bands": [
          0
        ]
      },
      "B6": {
        "href": "s3://cbers-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116_L4_BAND6.tif",
        "type": "image/vnd.stac.geotiff; cloud-optimized=true",
        "eo:bands": [
          1
        ]
      },
      "B7": {
        "href": "s3://cbers-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116_L4_BAND7.tif",
        "type": "image/vnd.stac.geotiff; cloud-optimized=true",
        "eo:bands": [
          2
        ]
      },
      "B8": {
        "href": "s3://cbers-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116_L4_BAND8.tif",
        "type": "image/vnd.stac.geotiff; cloud-optimized=true",
        "eo:bands": [
          3
        ]
      }
    }
  }

  let features = [
    {
      "type": "Feature",
      "id": "LC82270712019269",
      "bbox": [
        -58.27255,
        -16.95153,
        -56.12561,
        -14.85075
      ],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -57.88307680247207,
              -14.851600607206056
            ],
            [
              -56.12648468211813,
              -15.217324956136416
            ],
            [
              -56.5147643094675,
              -16.95067173326485
            ],
            [
              -58.27233386841506,
              -16.58390947173561
            ],
            [
              -57.88307680247207,
              -14.851600607206056
            ]
          ]
        ]
      },
      "properties": {
        "collection": "landsat-8-l1",
        "eo:gsd": 15,
        "eo:platform": "landsat-8",
        "eo:instrument": "OLI_TIRS",
        "eo:off_nadir": 0,
        "eo:bands": [
          {
            "name": "B1",
            "common_name": "coastal",
            "gsd": 30,
            "center_wavelength": 0.44,
            "full_width_half_max": 0.02
          },
          {
            "name": "B2",
            "common_name": "blue",
            "gsd": 30,
            "center_wavelength": 0.48,
            "full_width_half_max": 0.06
          },
          {
            "name": "B3",
            "common_name": "green",
            "gsd": 30,
            "center_wavelength": 0.56,
            "full_width_half_max": 0.06
          },
          {
            "name": "B4",
            "common_name": "red",
            "gsd": 30,
            "center_wavelength": 0.65,
            "full_width_half_max": 0.04
          },
          {
            "name": "B5",
            "common_name": "nir",
            "gsd": 30,
            "center_wavelength": 0.86,
            "full_width_half_max": 0.03
          },
          {
            "name": "B6",
            "common_name": "swir16",
            "gsd": 30,
            "center_wavelength": 1.6,
            "full_width_half_max": 0.08
          },
          {
            "name": "B7",
            "common_name": "swir22",
            "gsd": 30,
            "center_wavelength": 2.2,
            "full_width_half_max": 0.2
          },
          {
            "name": "B8",
            "common_name": "pan",
            "gsd": 15,
            "center_wavelength": 0.59,
            "full_width_half_max": 0.18
          },
          {
            "name": "B9",
            "common_name": "cirrus",
            "gsd": 30,
            "center_wavelength": 1.37,
            "full_width_half_max": 0.02
          },
          {
            "name": "B10",
            "common_name": "lwir11",
            "gsd": 100,
            "center_wavelength": 10.9,
            "full_width_half_max": 0.8
          },
          {
            "name": "B11",
            "common_name": "lwir12",
            "gsd": 100,
            "center_wavelength": 12,
            "full_width_half_max": 1
          }
        ],
        "datetime": "2019-09-26T13:52:08.491192+00:00",
        "eo:sun_azimuth": 63.85998213,
        "eo:sun_elevation": 59.62135312,
        "eo:cloud_cover": 100,
        "eo:row": "071",
        "eo:column": "227",
        "landsat:product_id": "LC08_L1GT_227071_20190926_20190926_01_RT",
        "landsat:scene_id": "LC82270712019269LGN00",
        "landsat:processing_level": "L1GT",
        "landsat:tier": "RT",
        "landsat:revision": "00",
        "eo:epsg": 32721
      },
      "assets": {
        "index": {
          "type": "text/html",
          "title": "HTML index page",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_MTL.txt"
        },
        "thumbnail": {
          "title": "Thumbnail image",
          "type": "image/jpeg",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_thumb_large.jpg"
        },
        "B1": {
          "type": "image/x.geotiff",
          "eo:bands": [
            0
          ],
          "title": "Band 1 (coastal)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B1.TIF"
        },
        "B2": {
          "type": "image/x.geotiff",
          "eo:bands": [
            1
          ],
          "title": "Band 2 (blue)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B2.TIF"
        },
        "B3": {
          "type": "image/x.geotiff",
          "eo:bands": [
            2
          ],
          "title": "Band 3 (green)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B3.TIF"
        },
        "B4": {
          "type": "image/x.geotiff",
          "eo:bands": [
            3
          ],
          "title": "Band 4 (red)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B4.TIF"
        },
        "B5": {
          "type": "image/x.geotiff",
          "eo:bands": [
            4
          ],
          "title": "Band 5 (nir)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B5.TIF"
        },
        "B6": {
          "type": "image/x.geotiff",
          "eo:bands": [
            5
          ],
          "title": "Band 6 (swir16)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B6.TIF"
        },
        "B7": {
          "type": "image/x.geotiff",
          "eo:bands": [
            6
          ],
          "title": "Band 7 (swir22)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B7.TIF"
        },
        "B8": {
          "type": "image/x.geotiff",
          "eo:bands": [
            7
          ],
          "title": "Band 8 (pan)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B8.TIF"
        },
        "B9": {
          "type": "image/x.geotiff",
          "eo:bands": [
            8
          ],
          "title": "Band 9 (cirrus)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B9.TIF"
        },
        "B10": {
          "type": "image/x.geotiff",
          "eo:bands": [
            9
          ],
          "title": "Band 10 (lwir)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B10.TIF"
        },
        "B11": {
          "type": "image/x.geotiff",
          "eo:bands": [
            10
          ],
          "title": "Band 11 (lwir)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_B11.TIF"
        },
        "ANG": {
          "title": "Angle coefficients file",
          "type": "text/plain",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_ANG.txt"
        },
        "MTL": {
          "title": "original metadata file",
          "type": "text/plain",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_MTL.txt"
        },
        "BQA": {
          "title": "Band quality data",
          "type": "image/x.geotiff",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/071/LC08_L1GT_227071_20190926_20190926_01_RT/LC08_L1GT_227071_20190926_20190926_01_RT_BQA.TIF"
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC82270712019269"
        },
        {
          "rel": "parent",
          "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1"
        },
        {
          "rel": "collection",
          "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1"
        },
        {
          "rel": "root",
          "href": "https://sat-api.developmentseed.org/stac"
        }
      ]
    },
    {
      "type": "Feature",
      "id": "LC82270702019269",
      "bbox": [
        -57.9417,
        -15.50858,
        -55.80753,
        -13.40564
      ],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -57.55262712972821,
              -13.407633617235643
            ],
            [
              -55.810098777177956,
              -13.774373233125653
            ],
            [
              -56.197426240944516,
              -15.507500855081698
            ],
            [
              -57.94072115234395,
              -15.139268756817645
            ],
            [
              -57.55262712972821,
              -13.407633617235643
            ]
          ]
        ]
      },
      "properties": {
        "collection": "landsat-8-l1",
        "eo:gsd": 15,
        "eo:platform": "landsat-8",
        "eo:instrument": "OLI_TIRS",
        "eo:off_nadir": 0,
        "eo:bands": [
          {
            "name": "B1",
            "common_name": "coastal",
            "gsd": 30,
            "center_wavelength": 0.44,
            "full_width_half_max": 0.02
          },
          {
            "name": "B2",
            "common_name": "blue",
            "gsd": 30,
            "center_wavelength": 0.48,
            "full_width_half_max": 0.06
          },
          {
            "name": "B3",
            "common_name": "green",
            "gsd": 30,
            "center_wavelength": 0.56,
            "full_width_half_max": 0.06
          },
          {
            "name": "B4",
            "common_name": "red",
            "gsd": 30,
            "center_wavelength": 0.65,
            "full_width_half_max": 0.04
          },
          {
            "name": "B5",
            "common_name": "nir",
            "gsd": 30,
            "center_wavelength": 0.86,
            "full_width_half_max": 0.03
          },
          {
            "name": "B6",
            "common_name": "swir16",
            "gsd": 30,
            "center_wavelength": 1.6,
            "full_width_half_max": 0.08
          },
          {
            "name": "B7",
            "common_name": "swir22",
            "gsd": 30,
            "center_wavelength": 2.2,
            "full_width_half_max": 0.2
          },
          {
            "name": "B8",
            "common_name": "pan",
            "gsd": 15,
            "center_wavelength": 0.59,
            "full_width_half_max": 0.18
          },
          {
            "name": "B9",
            "common_name": "cirrus",
            "gsd": 30,
            "center_wavelength": 1.37,
            "full_width_half_max": 0.02
          },
          {
            "name": "B10",
            "common_name": "lwir11",
            "gsd": 100,
            "center_wavelength": 10.9,
            "full_width_half_max": 0.8
          },
          {
            "name": "B11",
            "common_name": "lwir12",
            "gsd": 100,
            "center_wavelength": 12,
            "full_width_half_max": 1
          }
        ],
        "datetime": "2019-09-26T13:51:44.557794+00:00",
        "eo:sun_azimuth": 65.9105455,
        "eo:sun_elevation": 60.42886226,
        "eo:cloud_cover": 90,
        "eo:row": "070",
        "eo:column": "227",
        "landsat:product_id": "LC08_L1GT_227070_20190926_20190926_01_RT",
        "landsat:scene_id": "LC82270702019269LGN00",
        "landsat:processing_level": "L1GT",
        "landsat:tier": "RT",
        "landsat:revision": "00",
        "eo:epsg": 32721
      },
      "assets": {
        "index": {
          "type": "text/html",
          "title": "HTML index page",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_MTL.txt"
        },
        "thumbnail": {
          "title": "Thumbnail image",
          "type": "image/jpeg",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_thumb_large.jpg"
        },
        "B1": {
          "type": "image/x.geotiff",
          "eo:bands": [
            0
          ],
          "title": "Band 1 (coastal)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B1.TIF"
        },
        "B2": {
          "type": "image/x.geotiff",
          "eo:bands": [
            1
          ],
          "title": "Band 2 (blue)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B2.TIF"
        },
        "B3": {
          "type": "image/x.geotiff",
          "eo:bands": [
            2
          ],
          "title": "Band 3 (green)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B3.TIF"
        },
        "B4": {
          "type": "image/x.geotiff",
          "eo:bands": [
            3
          ],
          "title": "Band 4 (red)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B4.TIF"
        },
        "B5": {
          "type": "image/x.geotiff",
          "eo:bands": [
            4
          ],
          "title": "Band 5 (nir)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B5.TIF"
        },
        "B6": {
          "type": "image/x.geotiff",
          "eo:bands": [
            5
          ],
          "title": "Band 6 (swir16)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B6.TIF"
        },
        "B7": {
          "type": "image/x.geotiff",
          "eo:bands": [
            6
          ],
          "title": "Band 7 (swir22)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B7.TIF"
        },
        "B8": {
          "type": "image/x.geotiff",
          "eo:bands": [
            7
          ],
          "title": "Band 8 (pan)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B8.TIF"
        },
        "B9": {
          "type": "image/x.geotiff",
          "eo:bands": [
            8
          ],
          "title": "Band 9 (cirrus)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B9.TIF"
        },
        "B10": {
          "type": "image/x.geotiff",
          "eo:bands": [
            9
          ],
          "title": "Band 10 (lwir)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B10.TIF"
        },
        "B11": {
          "type": "image/x.geotiff",
          "eo:bands": [
            10
          ],
          "title": "Band 11 (lwir)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_B11.TIF"
        },
        "ANG": {
          "title": "Angle coefficients file",
          "type": "text/plain",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_ANG.txt"
        },
        "MTL": {
          "title": "original metadata file",
          "type": "text/plain",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_MTL.txt"
        },
        "BQA": {
          "title": "Band quality data",
          "type": "image/x.geotiff",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/227/070/LC08_L1GT_227070_20190926_20190926_01_RT/LC08_L1GT_227070_20190926_20190926_01_RT_BQA.TIF"
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC82270702019269"
        },
        {
          "rel": "parent",
          "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1"
        },
        {
          "rel": "collection",
          "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1"
        },
        {
          "rel": "root",
          "href": "https://sat-api.developmentseed.org/stac"
        }
      ]
    },
    {
      "type": "Feature",
      "id": "LC82260712019262",
      "bbox": [
        -56.723,
        -16.96406,
        -54.56241,
        -14.84154
      ],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -56.319993946465644,
              -14.841776457620707
            ],
            [
              -54.563373022991776,
              -15.221484411422367
            ],
            [
              -54.96589502173295,
              -16.961841031229085
            ],
            [
              -56.72287022951024,
              -16.579818039325943
            ],
            [
              -56.319993946465644,
              -14.841776457620707
            ]
          ]
        ]
      },
      "properties": {
        "collection": "landsat-8-l1",
        "eo:gsd": 15,
        "eo:platform": "landsat-8",
        "eo:instrument": "OLI_TIRS",
        "eo:off_nadir": 0,
        "eo:bands": [
          {
            "full_width_half_max": 0.02,
            "center_wavelength": 0.44,
            "name": "B1",
            "gsd": 30,
            "common_name": "coastal"
          },
          {
            "full_width_half_max": 0.06,
            "center_wavelength": 0.48,
            "name": "B2",
            "gsd": 30,
            "common_name": "blue"
          },
          {
            "full_width_half_max": 0.06,
            "center_wavelength": 0.56,
            "name": "B3",
            "gsd": 30,
            "common_name": "green"
          },
          {
            "full_width_half_max": 0.04,
            "center_wavelength": 0.65,
            "name": "B4",
            "gsd": 30,
            "common_name": "red"
          },
          {
            "full_width_half_max": 0.03,
            "center_wavelength": 0.86,
            "name": "B5",
            "gsd": 30,
            "common_name": "nir"
          },
          {
            "full_width_half_max": 0.08,
            "center_wavelength": 1.6,
            "name": "B6",
            "gsd": 30,
            "common_name": "swir16"
          },
          {
            "full_width_half_max": 0.2,
            "center_wavelength": 2.2,
            "name": "B7",
            "gsd": 30,
            "common_name": "swir22"
          },
          {
            "full_width_half_max": 0.18,
            "center_wavelength": 0.59,
            "name": "B8",
            "gsd": 15,
            "common_name": "pan"
          },
          {
            "full_width_half_max": 0.02,
            "center_wavelength": 1.37,
            "name": "B9",
            "gsd": 30,
            "common_name": "cirrus"
          },
          {
            "full_width_half_max": 0.8,
            "center_wavelength": 10.9,
            "name": "B10",
            "gsd": 100,
            "common_name": "lwir11"
          },
          {
            "full_width_half_max": 1,
            "center_wavelength": 12,
            "name": "B11",
            "gsd": 100,
            "common_name": "lwir12"
          }
        ],
        "datetime": "2019-09-19T13:45:55.570336+00:00",
        "eo:sun_azimuth": 60.04497545,
        "eo:sun_elevation": 57.65505283,
        "eo:cloud_cover": 0,
        "eo:row": "071",
        "eo:column": "226",
        "landsat:product_id": "LC08_L1TP_226071_20190919_20190926_01_T1",
        "landsat:scene_id": "LC82260712019262LGN00",
        "landsat:processing_level": "L1TP",
        "landsat:tier": "T1",
        "landsat:revision": "00",
        "eo:epsg": 32721
      },
      "assets": {
        "index": {
          "type": "text/html",
          "title": "HTML index page",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_MTL.txt"
        },
        "thumbnail": {
          "title": "Thumbnail image",
          "type": "image/jpeg",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_thumb_large.jpg"
        },
        "B1": {
          "type": "image/x.geotiff",
          "eo:bands": [
            0
          ],
          "title": "Band 1 (coastal)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B1.TIF"
        },
        "B2": {
          "type": "image/x.geotiff",
          "eo:bands": [
            1
          ],
          "title": "Band 2 (blue)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B2.TIF"
        },
        "B3": {
          "type": "image/x.geotiff",
          "eo:bands": [
            2
          ],
          "title": "Band 3 (green)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B3.TIF"
        },
        "B4": {
          "type": "image/x.geotiff",
          "eo:bands": [
            3
          ],
          "title": "Band 4 (red)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B4.TIF"
        },
        "B5": {
          "type": "image/x.geotiff",
          "eo:bands": [
            4
          ],
          "title": "Band 5 (nir)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B5.TIF"
        },
        "B6": {
          "type": "image/x.geotiff",
          "eo:bands": [
            5
          ],
          "title": "Band 6 (swir16)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B6.TIF"
        },
        "B7": {
          "type": "image/x.geotiff",
          "eo:bands": [
            6
          ],
          "title": "Band 7 (swir22)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B7.TIF"
        },
        "B8": {
          "type": "image/x.geotiff",
          "eo:bands": [
            7
          ],
          "title": "Band 8 (pan)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B8.TIF"
        },
        "B9": {
          "type": "image/x.geotiff",
          "eo:bands": [
            8
          ],
          "title": "Band 9 (cirrus)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B9.TIF"
        },
        "B10": {
          "type": "image/x.geotiff",
          "eo:bands": [
            9
          ],
          "title": "Band 10 (lwir)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B10.TIF"
        },
        "B11": {
          "type": "image/x.geotiff",
          "eo:bands": [
            10
          ],
          "title": "Band 11 (lwir)",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_B11.TIF"
        },
        "ANG": {
          "title": "Angle coefficients file",
          "type": "text/plain",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_ANG.txt"
        },
        "MTL": {
          "title": "original metadata file",
          "type": "text/plain",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_MTL.txt"
        },
        "BQA": {
          "title": "Band quality data",
          "type": "image/x.geotiff",
          "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/226/071/LC08_L1TP_226071_20190919_20190926_01_T1/LC08_L1TP_226071_20190919_20190926_01_T1_BQA.TIF"
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC82260712019262"
        },
        {
          "rel": "parent",
          "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1"
        },
        {
          "rel": "collection",
          "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1"
        },
        {
          "rel": "root",
          "href": "https://sat-api.developmentseed.org/stac"
        }
      ]
    },
    {
      "type": "Feature",
      "id": "S2A_21LXC_20191001_0",
      "bbox": [
        -55.67902614367243,
        -16.365093740905092,
        -55.03587639429054,
        -15.368029755223816
      ],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -55.67902614367243,
              -16.365093740905092
            ],
            [
              -55.439191754726046,
              -15.371136957359257
            ],
            [
              -55.04546143170228,
              -15.368029755223816
            ],
            [
              -55.03587639429054,
              -16.3600775531931
            ],
            [
              -55.67902614367243,
              -16.365093740905092
            ]
          ]
        ]
      },
      "properties": {
        "collection": "sentinel-2-l1c",
        "eo:gsd": 10,
        "eo:instrument": "MSI",
        "eo:off_nadir": 0,
        "eo:bands": [
          {
            "full_width_half_max": 0.027,
            "center_wavelength": 0.4439,
            "name": "B01",
            "gsd": 60,
            "common_name": "coastal"
          },
          {
            "full_width_half_max": 0.098,
            "center_wavelength": 0.4966,
            "name": "B02",
            "gsd": 10,
            "common_name": "blue"
          },
          {
            "full_width_half_max": 0.045,
            "center_wavelength": 0.56,
            "name": "B03",
            "gsd": 10,
            "common_name": "green"
          },
          {
            "full_width_half_max": 0.038,
            "center_wavelength": 0.6645,
            "name": "B04",
            "gsd": 10,
            "common_name": "red"
          },
          {
            "full_width_half_max": 0.019,
            "center_wavelength": 0.7039,
            "name": "B05",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.018,
            "center_wavelength": 0.7402,
            "name": "B06",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.028,
            "center_wavelength": 0.7825,
            "name": "B07",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.145,
            "center_wavelength": 0.8351,
            "name": "B08",
            "gsd": 10,
            "common_name": "nir"
          },
          {
            "full_width_half_max": 0.033,
            "center_wavelength": 0.8648,
            "name": "B8A",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.026,
            "center_wavelength": 0.945,
            "name": "B09",
            "gsd": 60
          },
          {
            "full_width_half_max": 0.075,
            "center_wavelength": 1.3735,
            "name": "B10",
            "gsd": 60,
            "common_name": "cirrus"
          },
          {
            "full_width_half_max": 0.143,
            "center_wavelength": 1.6137,
            "name": "B11",
            "gsd": 20,
            "common_name": "swir16"
          },
          {
            "full_width_half_max": 0.242,
            "center_wavelength": 2.22024,
            "name": "B12",
            "gsd": 20,
            "common_name": "swir22"
          }
        ],
        "datetime": "2019-10-01T13:57:00.827000+00:00",
        "eo:platform": "sentinel-2a",
        "eo:cloud_cover": 5.88,
        "sentinel:utm_zone": 21,
        "sentinel:latitude_band": "L",
        "sentinel:grid_square": "XC",
        "sentinel:sequence": "0",
        "sentinel:product_id": "S2A_MSIL1C_20191001T135111_N0208_R024_T21LXC_20191001T153222"
      },
      "assets": {
        "thumbnail": {
          "title": "Thumbnail",
          "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/XC/2019/10/1/0/preview.jpg"
        },
        "info": {
          "title": "Basic JSON metadata",
          "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/XC/2019/10/1/0/tileInfo.json"
        },
        "metadata": {
          "title": "Complete XML metadata",
          "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/XC/2019/10/1/0/metadata.xml"
        },
        "tki": {
          "title": "True color image",
          "type": "image/jp2",
          "eo:bands": [
            3,
            2,
            1
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/TKI.jp2"
        },
        "B01": {
          "title": "Band 1 (coastal)",
          "type": "image/jp2",
          "eo:bands": [
            0
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B01.jp2"
        },
        "B02": {
          "title": "Band 2 (blue)",
          "type": "image/jp2",
          "eo:bands": [
            2
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B02.jp2"
        },
        "B03": {
          "title": "Band 3 (green)",
          "type": "image/jp2",
          "eo:bands": [
            2
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B03.jp2"
        },
        "B04": {
          "title": "Band 4 (red)",
          "type": "image/jp2",
          "eo:bands": [
            3
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B04.jp2"
        },
        "B05": {
          "title": "Band 5",
          "type": "image/jp2",
          "eo:bands": [
            4
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B05.jp2"
        },
        "B06": {
          "title": "Band 6",
          "type": "image/jp2",
          "eo:bands": [
            5
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B06.jp2"
        },
        "B07": {
          "title": "Band 7",
          "type": "image/jp2",
          "eo:bands": [
            6
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B07.jp2"
        },
        "B08": {
          "title": "Band 8 (nir)",
          "type": "image/jp2",
          "eo:bands": [
            7
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B08.jp2"
        },
        "B8A": {
          "title": "Band 8A",
          "type": "image/jp2",
          "eo:bands": [
            8
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B08.jp2"
        },
        "B09": {
          "title": "Band 9",
          "type": "image/jp2",
          "eo:bands": [
            9
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B09.jp2"
        },
        "B10": {
          "title": "Band 10 (cirrus)",
          "type": "image/jp2",
          "eo:bands": [
            10
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B10.jp2"
        },
        "B11": {
          "title": "Band 11 (swir16)",
          "type": "image/jp2",
          "eo:bands": [
            11
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B11.jp2"
        },
        "B12": {
          "title": "Band 12 (swir22)",
          "type": "image/jp2",
          "eo:bands": [
            12
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XC/2019/10/1/0/B11.jp2"
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2A_21LXC_20191001_0"
        },
        {
          "rel": "parent",
          "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c"
        },
        {
          "rel": "collection",
          "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c"
        },
        {
          "rel": "root",
          "href": "https://sat-api.developmentseed.org/stac"
        }
      ]
    },
    {
      "type": "Feature",
      "id": "S2A_21LYC_20191001_0",
      "bbox": [
        -55.13707902580606,
        -16.360916053323454,
        -54.100784724383395,
        -15.357920640820641
      ],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -55.12794262630334,
              -16.360916053323454
            ],
            [
              -55.13707902580606,
              -15.368814899451577
            ],
            [
              -54.11492009242318,
              -15.357920640820641
            ],
            [
              -54.100784724383395,
              -16.34928149386554
            ],
            [
              -55.12794262630334,
              -16.360916053323454
            ]
          ]
        ]
      },
      "properties": {
        "collection": "sentinel-2-l1c",
        "eo:gsd": 10,
        "eo:instrument": "MSI",
        "eo:off_nadir": 0,
        "eo:bands": [
          {
            "full_width_half_max": 0.027,
            "center_wavelength": 0.4439,
            "name": "B01",
            "gsd": 60,
            "common_name": "coastal"
          },
          {
            "full_width_half_max": 0.098,
            "center_wavelength": 0.4966,
            "name": "B02",
            "gsd": 10,
            "common_name": "blue"
          },
          {
            "full_width_half_max": 0.045,
            "center_wavelength": 0.56,
            "name": "B03",
            "gsd": 10,
            "common_name": "green"
          },
          {
            "full_width_half_max": 0.038,
            "center_wavelength": 0.6645,
            "name": "B04",
            "gsd": 10,
            "common_name": "red"
          },
          {
            "full_width_half_max": 0.019,
            "center_wavelength": 0.7039,
            "name": "B05",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.018,
            "center_wavelength": 0.7402,
            "name": "B06",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.028,
            "center_wavelength": 0.7825,
            "name": "B07",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.145,
            "center_wavelength": 0.8351,
            "name": "B08",
            "gsd": 10,
            "common_name": "nir"
          },
          {
            "full_width_half_max": 0.033,
            "center_wavelength": 0.8648,
            "name": "B8A",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.026,
            "center_wavelength": 0.945,
            "name": "B09",
            "gsd": 60
          },
          {
            "full_width_half_max": 0.075,
            "center_wavelength": 1.3735,
            "name": "B10",
            "gsd": 60,
            "common_name": "cirrus"
          },
          {
            "full_width_half_max": 0.143,
            "center_wavelength": 1.6137,
            "name": "B11",
            "gsd": 20,
            "common_name": "swir16"
          },
          {
            "full_width_half_max": 0.242,
            "center_wavelength": 2.22024,
            "name": "B12",
            "gsd": 20,
            "common_name": "swir22"
          }
        ],
        "datetime": "2019-10-01T13:56:57.780000+00:00",
        "eo:platform": "sentinel-2a",
        "eo:cloud_cover": 0.56,
        "sentinel:utm_zone": 21,
        "sentinel:latitude_band": "L",
        "sentinel:grid_square": "YC",
        "sentinel:sequence": "0",
        "sentinel:product_id": "S2A_MSIL1C_20191001T135111_N0208_R024_T21LYC_20191001T153222"
      },
      "assets": {
        "thumbnail": {
          "title": "Thumbnail",
          "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/YC/2019/10/1/0/preview.jpg"
        },
        "info": {
          "title": "Basic JSON metadata",
          "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/YC/2019/10/1/0/tileInfo.json"
        },
        "metadata": {
          "title": "Complete XML metadata",
          "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/YC/2019/10/1/0/metadata.xml"
        },
        "tki": {
          "title": "True color image",
          "type": "image/jp2",
          "eo:bands": [
            3,
            2,
            1
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/TKI.jp2"
        },
        "B01": {
          "title": "Band 1 (coastal)",
          "type": "image/jp2",
          "eo:bands": [
            0
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B01.jp2"
        },
        "B02": {
          "title": "Band 2 (blue)",
          "type": "image/jp2",
          "eo:bands": [
            2
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B02.jp2"
        },
        "B03": {
          "title": "Band 3 (green)",
          "type": "image/jp2",
          "eo:bands": [
            2
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B03.jp2"
        },
        "B04": {
          "title": "Band 4 (red)",
          "type": "image/jp2",
          "eo:bands": [
            3
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B04.jp2"
        },
        "B05": {
          "title": "Band 5",
          "type": "image/jp2",
          "eo:bands": [
            4
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B05.jp2"
        },
        "B06": {
          "title": "Band 6",
          "type": "image/jp2",
          "eo:bands": [
            5
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B06.jp2"
        },
        "B07": {
          "title": "Band 7",
          "type": "image/jp2",
          "eo:bands": [
            6
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B07.jp2"
        },
        "B08": {
          "title": "Band 8 (nir)",
          "type": "image/jp2",
          "eo:bands": [
            7
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B08.jp2"
        },
        "B8A": {
          "title": "Band 8A",
          "type": "image/jp2",
          "eo:bands": [
            8
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B08.jp2"
        },
        "B09": {
          "title": "Band 9",
          "type": "image/jp2",
          "eo:bands": [
            9
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B09.jp2"
        },
        "B10": {
          "title": "Band 10 (cirrus)",
          "type": "image/jp2",
          "eo:bands": [
            10
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B10.jp2"
        },
        "B11": {
          "title": "Band 11 (swir16)",
          "type": "image/jp2",
          "eo:bands": [
            11
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B11.jp2"
        },
        "B12": {
          "title": "Band 12 (swir22)",
          "type": "image/jp2",
          "eo:bands": [
            12
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/YC/2019/10/1/0/B11.jp2"
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2A_21LYC_20191001_0"
        },
        {
          "rel": "parent",
          "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c"
        },
        {
          "rel": "collection",
          "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c"
        },
        {
          "rel": "root",
          "href": "https://sat-api.developmentseed.org/stac"
        }
      ]
    },
    {
      "type": "Feature",
      "id": "S2A_21LXD_20191001_0",
      "bbox": [
        -55.45995933418615,
        -15.459655795933774,
        -55.0446352452277,
        -14.464246588370708
      ],
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -55.45995933418615,
              -15.459655795933774
            ],
            [
              -55.22383864379692,
              -14.46559305260723
            ],
            [
              -55.053609198184745,
              -14.464246588370708
            ],
            [
              -55.0446352452277,
              -15.456379901026903
            ],
            [
              -55.45995933418615,
              -15.459655795933774
            ]
          ]
        ]
      },
      "properties": {
        "collection": "sentinel-2-l1c",
        "eo:gsd": 10,
        "eo:instrument": "MSI",
        "eo:off_nadir": 0,
        "eo:bands": [
          {
            "full_width_half_max": 0.027,
            "center_wavelength": 0.4439,
            "name": "B01",
            "gsd": 60,
            "common_name": "coastal"
          },
          {
            "full_width_half_max": 0.098,
            "center_wavelength": 0.4966,
            "name": "B02",
            "gsd": 10,
            "common_name": "blue"
          },
          {
            "full_width_half_max": 0.045,
            "center_wavelength": 0.56,
            "name": "B03",
            "gsd": 10,
            "common_name": "green"
          },
          {
            "full_width_half_max": 0.038,
            "center_wavelength": 0.6645,
            "name": "B04",
            "gsd": 10,
            "common_name": "red"
          },
          {
            "full_width_half_max": 0.019,
            "center_wavelength": 0.7039,
            "name": "B05",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.018,
            "center_wavelength": 0.7402,
            "name": "B06",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.028,
            "center_wavelength": 0.7825,
            "name": "B07",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.145,
            "center_wavelength": 0.8351,
            "name": "B08",
            "gsd": 10,
            "common_name": "nir"
          },
          {
            "full_width_half_max": 0.033,
            "center_wavelength": 0.8648,
            "name": "B8A",
            "gsd": 20
          },
          {
            "full_width_half_max": 0.026,
            "center_wavelength": 0.945,
            "name": "B09",
            "gsd": 60
          },
          {
            "full_width_half_max": 0.075,
            "center_wavelength": 1.3735,
            "name": "B10",
            "gsd": 60,
            "common_name": "cirrus"
          },
          {
            "full_width_half_max": 0.143,
            "center_wavelength": 1.6137,
            "name": "B11",
            "gsd": 20,
            "common_name": "swir16"
          },
          {
            "full_width_half_max": 0.242,
            "center_wavelength": 2.22024,
            "name": "B12",
            "gsd": 20,
            "common_name": "swir22"
          }
        ],
        "datetime": "2019-10-01T13:56:46.810000+00:00",
        "eo:platform": "sentinel-2a",
        "eo:cloud_cover": 1.14,
        "sentinel:utm_zone": 21,
        "sentinel:latitude_band": "L",
        "sentinel:grid_square": "XD",
        "sentinel:sequence": "0",
        "sentinel:product_id": "S2A_MSIL1C_20191001T135111_N0208_R024_T21LXD_20191001T153222"
      },
      "assets": {
        "thumbnail": {
          "title": "Thumbnail",
          "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/XD/2019/10/1/0/preview.jpg"
        },
        "info": {
          "title": "Basic JSON metadata",
          "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/XD/2019/10/1/0/tileInfo.json"
        },
        "metadata": {
          "title": "Complete XML metadata",
          "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/21/L/XD/2019/10/1/0/metadata.xml"
        },
        "tki": {
          "title": "True color image",
          "type": "image/jp2",
          "eo:bands": [
            3,
            2,
            1
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/TKI.jp2"
        },
        "B01": {
          "title": "Band 1 (coastal)",
          "type": "image/jp2",
          "eo:bands": [
            0
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B01.jp2"
        },
        "B02": {
          "title": "Band 2 (blue)",
          "type": "image/jp2",
          "eo:bands": [
            2
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B02.jp2"
        },
        "B03": {
          "title": "Band 3 (green)",
          "type": "image/jp2",
          "eo:bands": [
            2
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B03.jp2"
        },
        "B04": {
          "title": "Band 4 (red)",
          "type": "image/jp2",
          "eo:bands": [
            3
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B04.jp2"
        },
        "B05": {
          "title": "Band 5",
          "type": "image/jp2",
          "eo:bands": [
            4
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B05.jp2"
        },
        "B06": {
          "title": "Band 6",
          "type": "image/jp2",
          "eo:bands": [
            5
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B06.jp2"
        },
        "B07": {
          "title": "Band 7",
          "type": "image/jp2",
          "eo:bands": [
            6
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B07.jp2"
        },
        "B08": {
          "title": "Band 8 (nir)",
          "type": "image/jp2",
          "eo:bands": [
            7
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B08.jp2"
        },
        "B8A": {
          "title": "Band 8A",
          "type": "image/jp2",
          "eo:bands": [
            8
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B08.jp2"
        },
        "B09": {
          "title": "Band 9",
          "type": "image/jp2",
          "eo:bands": [
            9
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B09.jp2"
        },
        "B10": {
          "title": "Band 10 (cirrus)",
          "type": "image/jp2",
          "eo:bands": [
            10
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B10.jp2"
        },
        "B11": {
          "title": "Band 11 (swir16)",
          "type": "image/jp2",
          "eo:bands": [
            11
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B11.jp2"
        },
        "B12": {
          "title": "Band 12 (swir22)",
          "type": "image/jp2",
          "eo:bands": [
            12
          ],
          "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/21/L/XD/2019/10/1/0/B11.jp2"
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2A_21LXD_20191001_0"
        },
        {
          "rel": "parent",
          "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c"
        },
        {
          "rel": "collection",
          "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c"
        },
        {
          "rel": "root",
          "href": "https://sat-api.developmentseed.org/stac"
        }
      ]
    },
    {
      "id": "CBERS_4_MUX_20190910_168_116_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -58.159354,
                -14.763583
              ],
              [
                -57.045885,
                -14.936325
              ],
              [
                -56.803788,
                -13.874307
              ],
              [
                -57.911729,
                -13.70243
              ],
              [
                -58.159354,
                -14.763583
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -58.163446,
        -14.942375,
        -56.801549,
        -13.682666
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-10T13:51:06Z",
        "eo:sun_azimuth": 57.3973,
        "eo:sun_elevation": 55.8806,
        "eo:off_nadir": -0.00840441,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 168,
        "cbers:row": 116
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/168/116/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/116/CBERS_4_MUX_20190910_168_116_L4/CBERS_4_MUX_20190910_168_116_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_MUX_20190910_168_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -58.369531,
                -15.657718
              ],
              [
                -57.251065,
                -15.831244
              ],
              [
                -57.00775,
                -14.769461
              ],
              [
                -58.120322,
                -14.596859
              ],
              [
                -58.369531,
                -15.657718
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -58.373833,
        -15.835854,
        -57.005199,
        -14.577893
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-10T13:51:21Z",
        "eo:sun_azimuth": 56.4507,
        "eo:sun_elevation": 55.2761,
        "eo:off_nadir": -0.00840441,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 168,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/168/117/CBERS_4_MUX_20190910_168_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/168/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/168/117/CBERS_4_MUX_20190910_168_117_L4/CBERS_4_MUX_20190910_168_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/117/CBERS_4_MUX_20190910_168_117_L4/CBERS_4_MUX_20190910_168_117_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/117/CBERS_4_MUX_20190910_168_117_L4/CBERS_4_MUX_20190910_168_117_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/117/CBERS_4_MUX_20190910_168_117_L4/CBERS_4_MUX_20190910_168_117_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/117/CBERS_4_MUX_20190910_168_117_L4/CBERS_4_MUX_20190910_168_117_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/117/CBERS_4_MUX_20190910_168_117_L4/CBERS_4_MUX_20190910_168_117_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_MUX_20190910_168_118_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -58.581188,
                -16.551784
              ],
              [
                -57.457405,
                -16.726141
              ],
              [
                -57.212746,
                -15.664493
              ],
              [
                -58.330258,
                -15.491116
              ],
              [
                -58.581188,
                -16.551784
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -58.586022,
        -16.729092,
        -57.209756,
        -15.473416
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-10T13:51:36Z",
        "eo:sun_azimuth": 55.5434,
        "eo:sun_elevation": 54.6604,
        "eo:off_nadir": -0.00840441,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 168,
        "cbers:row": 118
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/168/118/CBERS_4_MUX_20190910_168_118_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/168/118/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/168/118/CBERS_4_MUX_20190910_168_118_L4/CBERS_4_MUX_20190910_168_118.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/118/CBERS_4_MUX_20190910_168_118_L4/CBERS_4_MUX_20190910_168_118_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/118/CBERS_4_MUX_20190910_168_118_L4/CBERS_4_MUX_20190910_168_118_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/118/CBERS_4_MUX_20190910_168_118_L4/CBERS_4_MUX_20190910_168_118_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/118/CBERS_4_MUX_20190910_168_118_L4/CBERS_4_MUX_20190910_168_118_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/168/118/CBERS_4_MUX_20190910_168_118_L4/CBERS_4_MUX_20190910_168_118_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_MUX_20190913_167_116_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -57.189946,
                -14.763882
              ],
              [
                -56.076502,
                -14.936605
              ],
              [
                -55.834411,
                -13.874586
              ],
              [
                -56.942327,
                -13.702729
              ],
              [
                -57.189946,
                -14.763882
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -57.193242,
        -14.94851,
        -55.83287,
        -13.679092
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-13T13:47:21Z",
        "eo:sun_azimuth": 58.7962,
        "eo:sun_elevation": 56.7659,
        "eo:off_nadir": -0.00893788,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 167,
        "cbers:row": 116
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/167/116/CBERS_4_MUX_20190913_167_116_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/167/116/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/167/116/CBERS_4_MUX_20190913_167_116_L4/CBERS_4_MUX_20190913_167_116.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/167/116/CBERS_4_MUX_20190913_167_116_L4/CBERS_4_MUX_20190913_167_116_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/167/116/CBERS_4_MUX_20190913_167_116_L4/CBERS_4_MUX_20190913_167_116_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/167/116/CBERS_4_MUX_20190913_167_116_L4/CBERS_4_MUX_20190913_167_116_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/167/116/CBERS_4_MUX_20190913_167_116_L4/CBERS_4_MUX_20190913_167_116_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/167/116/CBERS_4_MUX_20190913_167_116_L4/CBERS_4_MUX_20190913_167_116_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_MUX_20190913_167_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -57.399956,
                -15.657333
              ],
              [
                -56.281515,
                -15.830839
              ],
              [
                -56.038167,
                -14.768872
              ],
              [
                -57.15071,
                -14.596291
              ],
              [
                -57.399956,
                -15.657333
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -57.403451,
        -15.841458,
        -56.036409,
        -14.573557
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-13T13:47:36Z",
        "eo:sun_azimuth": 57.7952,
        "eo:sun_elevation": 56.1782,
        "eo:off_nadir": -0.00893788,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 167,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/167/117/CBERS_4_MUX_20190913_167_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/167/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/167/117/CBERS_4_MUX_20190913_167_117_L4/CBERS_4_MUX_20190913_167_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/167/117/CBERS_4_MUX_20190913_167_117_L4/CBERS_4_MUX_20190913_167_117_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/167/117/CBERS_4_MUX_20190913_167_117_L4/CBERS_4_MUX_20190913_167_117_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/167/117/CBERS_4_MUX_20190913_167_117_L4/CBERS_4_MUX_20190913_167_117_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/167/117/CBERS_4_MUX_20190913_167_117_L4/CBERS_4_MUX_20190913_167_117_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/167/117/CBERS_4_MUX_20190913_167_117_L4/CBERS_4_MUX_20190913_167_117_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_MUX_20190916_166_116_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -56.219969,
                -14.763042
              ],
              [
                -55.106539,
                -14.935715
              ],
              [
                -54.864442,
                -13.873548
              ],
              [
                -55.972341,
                -13.701743
              ],
              [
                -56.219969,
                -14.763042
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -56.223128,
        -14.953057,
        -54.864336,
        -13.674986
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-16T13:43:36Z",
        "eo:sun_azimuth": 60.2752,
        "eo:sun_elevation": 57.645,
        "eo:off_nadir": -0.00853149,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 166,
        "cbers:row": 116
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/166/116/CBERS_4_MUX_20190916_166_116_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/166/116/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/166/116/CBERS_4_MUX_20190916_166_116_L4/CBERS_4_MUX_20190916_166_116.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/116/CBERS_4_MUX_20190916_166_116_L4/CBERS_4_MUX_20190916_166_116_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/116/CBERS_4_MUX_20190916_166_116_L4/CBERS_4_MUX_20190916_166_116_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/116/CBERS_4_MUX_20190916_166_116_L4/CBERS_4_MUX_20190916_166_116_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/116/CBERS_4_MUX_20190916_166_116_L4/CBERS_4_MUX_20190916_166_116_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/116/CBERS_4_MUX_20190916_166_116_L4/CBERS_4_MUX_20190916_166_116_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_MUX_20190916_166_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -56.430122,
                -15.657186
              ],
              [
                -55.311693,
                -15.830642
              ],
              [
                -55.068414,
                -14.768878
              ],
              [
                -56.180946,
                -14.596346
              ],
              [
                -56.430122,
                -15.657186
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -56.433475,
        -15.847421,
        -55.068075,
        -14.570091
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-16T13:43:51Z",
        "eo:sun_azimuth": 59.2147,
        "eo:sun_elevation": 57.0743,
        "eo:off_nadir": -0.00853149,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 166,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/166/117/CBERS_4_MUX_20190916_166_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/166/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/166/117/CBERS_4_MUX_20190916_166_117_L4/CBERS_4_MUX_20190916_166_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/117/CBERS_4_MUX_20190916_166_117_L4/CBERS_4_MUX_20190916_166_117_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/117/CBERS_4_MUX_20190916_166_117_L4/CBERS_4_MUX_20190916_166_117_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/117/CBERS_4_MUX_20190916_166_117_L4/CBERS_4_MUX_20190916_166_117_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/117/CBERS_4_MUX_20190916_166_117_L4/CBERS_4_MUX_20190916_166_117_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/117/CBERS_4_MUX_20190916_166_117_L4/CBERS_4_MUX_20190916_166_117_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_MUX_20190916_166_118_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -56.641704,
                -16.551048
              ],
              [
                -55.517956,
                -16.725336
              ],
              [
                -55.273329,
                -15.663665
              ],
              [
                -56.390803,
                -15.490358
              ],
              [
                -56.641704,
                -16.551048
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -56.645179,
        -16.740844,
        -55.272835,
        -15.464792
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-16T13:44:06Z",
        "eo:sun_azimuth": 58.1975,
        "eo:sun_elevation": 56.4908,
        "eo:off_nadir": -0.00853149,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 166,
        "cbers:row": 118
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/166/118/CBERS_4_MUX_20190916_166_118_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/166/118/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/166/118/CBERS_4_MUX_20190916_166_118_L4/CBERS_4_MUX_20190916_166_118.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/118/CBERS_4_MUX_20190916_166_118_L4/CBERS_4_MUX_20190916_166_118_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/118/CBERS_4_MUX_20190916_166_118_L4/CBERS_4_MUX_20190916_166_118_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/118/CBERS_4_MUX_20190916_166_118_L4/CBERS_4_MUX_20190916_166_118_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/118/CBERS_4_MUX_20190916_166_118_L4/CBERS_4_MUX_20190916_166_118_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/166/118/CBERS_4_MUX_20190916_166_118_L4/CBERS_4_MUX_20190916_166_118_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_MUX_20190919_165_116_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -55.251737,
                -14.764183
              ],
              [
                -54.138286,
                -14.936847
              ],
              [
                -53.896236,
                -13.874812
              ],
              [
                -55.004153,
                -13.703014
              ],
              [
                -55.251737,
                -14.764183
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -55.253346,
        -14.958183,
        -53.896377,
        -13.670892
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-19T13:39:51Z",
        "eo:sun_azimuth": 61.8374,
        "eo:sun_elevation": 58.5089,
        "eo:off_nadir": -0.00897124,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 165,
        "cbers:row": 116
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/165/116/CBERS_4_MUX_20190919_165_116_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/165/116/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/165/116/CBERS_4_MUX_20190919_165_116_L4/CBERS_4_MUX_20190919_165_116.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/116/CBERS_4_MUX_20190919_165_116_L4/CBERS_4_MUX_20190919_165_116_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/116/CBERS_4_MUX_20190919_165_116_L4/CBERS_4_MUX_20190919_165_116_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/116/CBERS_4_MUX_20190919_165_116_L4/CBERS_4_MUX_20190919_165_116_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/116/CBERS_4_MUX_20190919_165_116_L4/CBERS_4_MUX_20190919_165_116_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/116/CBERS_4_MUX_20190919_165_116_L4/CBERS_4_MUX_20190919_165_116_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_MUX_20190919_165_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -55.461913,
                -15.658469
              ],
              [
                -54.343459,
                -15.831918
              ],
              [
                -54.100169,
                -14.770019
              ],
              [
                -55.212721,
                -14.597493
              ],
              [
                -55.461913,
                -15.658469
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -55.463585,
        -15.852839,
        -54.100448,
        -14.565872
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-19T13:40:06Z",
        "eo:sun_azimuth": 60.7149,
        "eo:sun_elevation": 57.9573,
        "eo:off_nadir": -0.00897124,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 165,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/165/117/CBERS_4_MUX_20190919_165_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/165/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/165/117/CBERS_4_MUX_20190919_165_117_L4/CBERS_4_MUX_20190919_165_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/117/CBERS_4_MUX_20190919_165_117_L4/CBERS_4_MUX_20190919_165_117_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/117/CBERS_4_MUX_20190919_165_117_L4/CBERS_4_MUX_20190919_165_117_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/117/CBERS_4_MUX_20190919_165_117_L4/CBERS_4_MUX_20190919_165_117_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/117/CBERS_4_MUX_20190919_165_117_L4/CBERS_4_MUX_20190919_165_117_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/117/CBERS_4_MUX_20190919_165_117_L4/CBERS_4_MUX_20190919_165_117_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_MUX_20190919_165_118_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -55.673411,
                -16.55204
              ],
              [
                -54.549638,
                -16.726321
              ],
              [
                -54.305046,
                -15.664716
              ],
              [
                -55.422541,
                -15.491417
              ],
              [
                -55.673411,
                -16.55204
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -55.675712,
        -16.746662,
        -54.305328,
        -15.460193
      ],
      "collection": "CBERS4MUX",
      "properties": {
        "datetime": "2019-09-19T13:40:22",
        "eo:sun_azimuth": 59.6378,
        "eo:sun_elevation": 57.3918,
        "eo:off_nadir": -0.00897124,
        "eo:epsg": 32757,
        "eo:instrument": "MUX",
        "cbers:data_type": "L4",
        "cbers:path": 165,
        "cbers:row": 118
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/165/118/CBERS_4_MUX_20190919_165_118_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/165/118/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/165/118/CBERS_4_MUX_20190919_165_118_L4/CBERS_4_MUX_20190919_165_118.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/118/CBERS_4_MUX_20190919_165_118_L4/CBERS_4_MUX_20190919_165_118_L4_BAND6.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B5": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/118/CBERS_4_MUX_20190919_165_118_L4/CBERS_4_MUX_20190919_165_118_L4_BAND5.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B6": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/118/CBERS_4_MUX_20190919_165_118_L4/CBERS_4_MUX_20190919_165_118_L4_BAND6.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B7": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/118/CBERS_4_MUX_20190919_165_118_L4/CBERS_4_MUX_20190919_165_118_L4_BAND7.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B8": {
          "href": "s3://cbers-pds/CBERS4/MUX/165/118/CBERS_4_MUX_20190919_165_118_L4/CBERS_4_MUX_20190919_165_118_L4_BAND8.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190902_162_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -56.833328,
                -17.823299
              ],
              [
                -48.497919,
                -19.121916
              ],
              [
                -47.067585,
                -12.333885
              ],
              [
                -55.128035,
                -11.078158
              ],
              [
                -56.833328,
                -17.823299
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -56.883321,
        -19.080766,
        -47.076468,
        -11.003168
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-02T13:27:52Z",
        "eo:sun_azimuth": 53.2474,
        "eo:sun_elevation": 53.7949,
        "eo:off_nadir": -0.00906375,
        "eo:epsg": 32751,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 162,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/162/117/CBERS_4_AWFI_20190902_162_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/162/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/162/117/CBERS_4_AWFI_20190902_162_117_L4/CBERS_4_AWFI_20190902_162_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/162/117/CBERS_4_AWFI_20190902_162_117_L4/CBERS_4_AWFI_20190902_162_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/162/117/CBERS_4_AWFI_20190902_162_117_L4/CBERS_4_AWFI_20190902_162_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/162/117/CBERS_4_AWFI_20190902_162_117_L4/CBERS_4_AWFI_20190902_162_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/162/117/CBERS_4_AWFI_20190902_162_117_L4/CBERS_4_AWFI_20190902_162_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/162/117/CBERS_4_AWFI_20190902_162_117_L4/CBERS_4_AWFI_20190902_162_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190904_170_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -64.551053,
                -17.823495
              ],
              [
                -56.216086,
                -19.122002
              ],
              [
                -54.785799,
                -12.333465
              ],
              [
                -62.845735,
                -11.077864
              ],
              [
                -64.551053,
                -17.823495
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -64.609021,
        -19.004194,
        -54.787415,
        -11.04766
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-04T13:58:50Z",
        "eo:sun_azimuth": 54.0138,
        "eo:sun_elevation": 54.4071,
        "eo:off_nadir": -0.00785428,
        "eo:epsg": 32757,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 170,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/170/117/CBERS_4_AWFI_20190904_170_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/170/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/170/117/CBERS_4_AWFI_20190904_170_117_L4/CBERS_4_AWFI_20190904_170_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/170/117/CBERS_4_AWFI_20190904_170_117_L4/CBERS_4_AWFI_20190904_170_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/170/117/CBERS_4_AWFI_20190904_170_117_L4/CBERS_4_AWFI_20190904_170_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/170/117/CBERS_4_AWFI_20190904_170_117_L4/CBERS_4_AWFI_20190904_170_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/170/117/CBERS_4_AWFI_20190904_170_117_L4/CBERS_4_AWFI_20190904_170_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/170/117/CBERS_4_AWFI_20190904_170_117_L4/CBERS_4_AWFI_20190904_170_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190905_161_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -55.864031,
                -17.823695
              ],
              [
                -47.52904,
                -19.122138
              ],
              [
                -46.098765,
                -12.333999
              ],
              [
                -54.158738,
                -11.078461
              ],
              [
                -55.864031,
                -17.823695
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -55.904173,
        -19.1199,
        -46.112413,
        -10.971287
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-05T13:24:07Z",
        "eo:sun_azimuth": 54.4472,
        "eo:sun_elevation": 54.6843,
        "eo:off_nadir": -0.00935657,
        "eo:epsg": 32751,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 161,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/161/117/CBERS_4_AWFI_20190905_161_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/161/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/161/117/CBERS_4_AWFI_20190905_161_117_L4/CBERS_4_AWFI_20190905_161_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/161/117/CBERS_4_AWFI_20190905_161_117_L4/CBERS_4_AWFI_20190905_161_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/161/117/CBERS_4_AWFI_20190905_161_117_L4/CBERS_4_AWFI_20190905_161_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/161/117/CBERS_4_AWFI_20190905_161_117_L4/CBERS_4_AWFI_20190905_161_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/161/117/CBERS_4_AWFI_20190905_161_117_L4/CBERS_4_AWFI_20190905_161_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/161/117/CBERS_4_AWFI_20190905_161_117_L4/CBERS_4_AWFI_20190905_161_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190907_169_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -63.58221,
                -17.822803
              ],
              [
                -55.247642,
                -19.121217
              ],
              [
                -53.817427,
                -12.333141
              ],
              [
                -61.87693,
                -11.077641
              ],
              [
                -63.58221,
                -17.822803
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -63.634658,
        -19.047689,
        -53.821896,
        -11.02172
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-07T13:55:05Z",
        "eo:sun_azimuth": 55.2585,
        "eo:sun_elevation": 55.3016,
        "eo:off_nadir": -0.00874933,
        "eo:epsg": 32757,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 169,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/169/117/CBERS_4_AWFI_20190907_169_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/169/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/169/117/CBERS_4_AWFI_20190907_169_117_L4/CBERS_4_AWFI_20190907_169_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/169/117/CBERS_4_AWFI_20190907_169_117_L4/CBERS_4_AWFI_20190907_169_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/169/117/CBERS_4_AWFI_20190907_169_117_L4/CBERS_4_AWFI_20190907_169_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/169/117/CBERS_4_AWFI_20190907_169_117_L4/CBERS_4_AWFI_20190907_169_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/169/117/CBERS_4_AWFI_20190907_169_117_L4/CBERS_4_AWFI_20190907_169_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/169/117/CBERS_4_AWFI_20190907_169_117_L4/CBERS_4_AWFI_20190907_169_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190910_168_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -62.613069,
                -17.823161
              ],
              [
                -54.278808,
                -19.121747
              ],
              [
                -52.848479,
                -12.333238
              ],
              [
                -60.907593,
                -11.077578
              ],
              [
                -62.613069,
                -17.823161
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -62.660103,
        -19.091813,
        -52.858528,
        -10.997384
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-10T13:51:20Z",
        "eo:sun_azimuth": 56.5715,
        "eo:sun_elevation": 56.1994,
        "eo:off_nadir": -0.00840441,
        "eo:epsg": 32757,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 168,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/168/117/CBERS_4_AWFI_20190910_168_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/168/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/168/117/CBERS_4_AWFI_20190910_168_117_L4/CBERS_4_AWFI_20190910_168_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/168/117/CBERS_4_AWFI_20190910_168_117_L4/CBERS_4_AWFI_20190910_168_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/168/117/CBERS_4_AWFI_20190910_168_117_L4/CBERS_4_AWFI_20190910_168_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/168/117/CBERS_4_AWFI_20190910_168_117_L4/CBERS_4_AWFI_20190910_168_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/168/117/CBERS_4_AWFI_20190910_168_117_L4/CBERS_4_AWFI_20190910_168_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/168/117/CBERS_4_AWFI_20190910_168_117_L4/CBERS_4_AWFI_20190910_168_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190913_167_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -61.64339,
                -17.82269
              ],
              [
                -53.309307,
                -19.121144
              ],
              [
                -51.879076,
                -12.332666
              ],
              [
                -59.937952,
                -11.077163
              ],
              [
                -61.64339,
                -17.82269
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -61.684983,
        -19.137162,
        -51.894113,
        -10.970582
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-13T13:47:35Z",
        "eo:sun_azimuth": 57.9595,
        "eo:sun_elevation": 57.0964,
        "eo:off_nadir": -0.00893788,
        "eo:epsg": 32757,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 167,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/167/117/CBERS_4_AWFI_20190913_167_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/167/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/167/117/CBERS_4_AWFI_20190913_167_117_L4/CBERS_4_AWFI_20190913_167_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/167/117/CBERS_4_AWFI_20190913_167_117_L4/CBERS_4_AWFI_20190913_167_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/167/117/CBERS_4_AWFI_20190913_167_117_L4/CBERS_4_AWFI_20190913_167_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/167/117/CBERS_4_AWFI_20190913_167_117_L4/CBERS_4_AWFI_20190913_167_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/167/117/CBERS_4_AWFI_20190913_167_117_L4/CBERS_4_AWFI_20190913_167_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/167/117/CBERS_4_AWFI_20190913_167_117_L4/CBERS_4_AWFI_20190913_167_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190916_166_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -60.673525,
                -17.822946
              ],
              [
                -52.339475,
                -19.121031
              ],
              [
                -50.909423,
                -12.332538
              ],
              [
                -58.968191,
                -11.0774
              ],
              [
                -60.673525,
                -17.822946
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -60.706892,
        -19.175701,
        -50.929576,
        -10.938454
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-16T13:43:50Z",
        "eo:sun_azimuth": 59.4266,
        "eo:sun_elevation": 57.9865,
        "eo:off_nadir": -0.00853149,
        "eo:epsg": 32757,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 166,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/166/117/CBERS_4_AWFI_20190916_166_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/166/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/166/117/CBERS_4_AWFI_20190916_166_117_L4/CBERS_4_AWFI_20190916_166_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/166/117/CBERS_4_AWFI_20190916_166_117_L4/CBERS_4_AWFI_20190916_166_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/166/117/CBERS_4_AWFI_20190916_166_117_L4/CBERS_4_AWFI_20190916_166_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/166/117/CBERS_4_AWFI_20190916_166_117_L4/CBERS_4_AWFI_20190916_166_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/166/117/CBERS_4_AWFI_20190916_166_117_L4/CBERS_4_AWFI_20190916_166_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/166/117/CBERS_4_AWFI_20190916_166_117_L4/CBERS_4_AWFI_20190916_166_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190919_165_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -59.70536,
                -17.824083
              ],
              [
                -51.371075,
                -19.122117
              ],
              [
                -49.941229,
                -12.333744
              ],
              [
                -58.000092,
                -11.078673
              ],
              [
                -59.70536,
                -17.824083
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -59.770085,
        -18.956505,
        -49.938209,
        -11.082246
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-19T13:40:05Z",
        "eo:sun_azimuth": 60.9797,
        "eo:sun_elevation": 58.8624,
        "eo:off_nadir": -0.00897124,
        "eo:epsg": 32751,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 165,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/165/117/CBERS_4_AWFI_20190919_165_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/165/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/165/117/CBERS_4_AWFI_20190919_165_117_L4/CBERS_4_AWFI_20190919_165_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/165/117/CBERS_4_AWFI_20190919_165_117_L4/CBERS_4_AWFI_20190919_165_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/165/117/CBERS_4_AWFI_20190919_165_117_L4/CBERS_4_AWFI_20190919_165_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/165/117/CBERS_4_AWFI_20190919_165_117_L4/CBERS_4_AWFI_20190919_165_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/165/117/CBERS_4_AWFI_20190919_165_117_L4/CBERS_4_AWFI_20190919_165_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/165/117/CBERS_4_AWFI_20190919_165_117_L4/CBERS_4_AWFI_20190919_165_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190922_164_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -58.742085,
                -17.824111
              ],
              [
                -50.407604,
                -19.122188
              ],
              [
                -48.977785,
                -12.3338
              ],
              [
                -57.036751,
                -11.078696
              ],
              [
                -58.742085,
                -17.824111
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -58.801274,
        -18.996713,
        -48.977696,
        -11.051885
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-22T13:36:22Z",
        "eo:sun_azimuth": 62.6215,
        "eo:sun_elevation": 59.7241,
        "eo:off_nadir": -0.00928027,
        "eo:epsg": 32751,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 164,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/164/117/CBERS_4_AWFI_20190922_164_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/164/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/164/117/CBERS_4_AWFI_20190922_164_117_L4/CBERS_4_AWFI_20190922_164_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/164/117/CBERS_4_AWFI_20190922_164_117_L4/CBERS_4_AWFI_20190922_164_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/164/117/CBERS_4_AWFI_20190922_164_117_L4/CBERS_4_AWFI_20190922_164_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/164/117/CBERS_4_AWFI_20190922_164_117_L4/CBERS_4_AWFI_20190922_164_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/164/117/CBERS_4_AWFI_20190922_164_117_L4/CBERS_4_AWFI_20190922_164_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/164/117/CBERS_4_AWFI_20190922_164_117_L4/CBERS_4_AWFI_20190922_164_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190924_172_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -66.464203,
                -17.823535
              ],
              [
                -58.129669,
                -19.121703
              ],
              [
                -56.699804,
                -12.332965
              ],
              [
                -64.758752,
                -11.077787
              ],
              [
                -66.464203,
                -17.823535
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -66.498792,
        -19.193074,
        -56.720971,
        -10.940554
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-24T14:07:20Z",
        "eo:sun_azimuth": 63.7502,
        "eo:sun_elevation": 60.3032,
        "eo:off_nadir": -0.00916425,
        "eo:epsg": 32763,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 172,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/172/117/CBERS_4_AWFI_20190924_172_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/172/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/172/117/CBERS_4_AWFI_20190924_172_117_L4/CBERS_4_AWFI_20190924_172_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/172/117/CBERS_4_AWFI_20190924_172_117_L4/CBERS_4_AWFI_20190924_172_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/172/117/CBERS_4_AWFI_20190924_172_117_L4/CBERS_4_AWFI_20190924_172_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/172/117/CBERS_4_AWFI_20190924_172_117_L4/CBERS_4_AWFI_20190924_172_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/172/117/CBERS_4_AWFI_20190924_172_117_L4/CBERS_4_AWFI_20190924_172_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/172/117/CBERS_4_AWFI_20190924_172_117_L4/CBERS_4_AWFI_20190924_172_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_AWFI_20190927_171_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -65.500431,
                -17.823997
              ],
              [
                -57.165494,
                -19.122328
              ],
              [
                -55.73565,
                -12.333565
              ],
              [
                -63.794897,
                -11.078232
              ],
              [
                -65.500431,
                -17.823997
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -65.563049,
        -18.960528,
        -55.731431,
        -11.072189
      ],
      "collection": "CBERS4AWFI",
      "properties": {
        "datetime": "2019-09-27T14:03:36Z",
        "eo:sun_azimuth": 65.5558,
        "eo:sun_elevation": 61.1194,
        "eo:off_nadir": -0.00882066,
        "eo:epsg": 32757,
        "eo:instrument": "AWFI",
        "cbers:data_type": "L4",
        "cbers:path": 171,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/171/117/CBERS_4_AWFI_20190927_171_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/171/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/171/117/CBERS_4_AWFI_20190927_171_117_L4/CBERS_4_AWFI_20190927_171_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/AWFI/171/117/CBERS_4_AWFI_20190927_171_117_L4/CBERS_4_AWFI_20190927_171_117_L4_BAND14.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B13": {
          "href": "s3://cbers-pds/CBERS4/AWFI/171/117/CBERS_4_AWFI_20190927_171_117_L4/CBERS_4_AWFI_20190927_171_117_L4_BAND13.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B14": {
          "href": "s3://cbers-pds/CBERS4/AWFI/171/117/CBERS_4_AWFI_20190927_171_117_L4/CBERS_4_AWFI_20190927_171_117_L4_BAND14.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B15": {
          "href": "s3://cbers-pds/CBERS4/AWFI/171/117/CBERS_4_AWFI_20190927_171_117_L4/CBERS_4_AWFI_20190927_171_117_L4_BAND15.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        },
        "B16": {
          "href": "s3://cbers-pds/CBERS4/AWFI/171/117/CBERS_4_AWFI_20190927_171_117_L4/CBERS_4_AWFI_20190927_171_117_L4_BAND16.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            3
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN10M_20190910_168_116_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -57.603198,
                -14.762694
              ],
              [
                -57.053153,
                -14.846372
              ],
              [
                -56.809735,
                -13.778534
              ],
              [
                -57.357034,
                -13.695237
              ],
              [
                -57.603198,
                -14.762694
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -57.605097,
        -14.845357,
        -56.810786,
        -13.695242
      ],
      "collection": "CBERS4PAN10M",
      "properties": {
        "datetime": "2019-09-10T13:51:06Z",
        "eo:sun_azimuth": 57.1217,
        "eo:sun_elevation": 56.1065,
        "eo:off_nadir": -0.00840441,
        "eo:epsg": 32757,
        "eo:instrument": "PAN10M",
        "cbers:data_type": "L4",
        "cbers:path": 168,
        "cbers:row": 116
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/168/116/CBERS_4_PAN10M_20190910_168_116_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/168/116/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN10M/168/116/CBERS_4_PAN10M_20190910_168_116_L4/CBERS_4_PAN10M_20190910_168_116.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/116/CBERS_4_PAN10M_20190910_168_116_L4/CBERS_4_PAN10M_20190910_168_116_L4_BAND4.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B2": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/116/CBERS_4_PAN10M_20190910_168_116_L4/CBERS_4_PAN10M_20190910_168_116_L4_BAND2.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B3": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/116/CBERS_4_PAN10M_20190910_168_116_L4/CBERS_4_PAN10M_20190910_168_116_L4_BAND3.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B4": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/116/CBERS_4_PAN10M_20190910_168_116_L4/CBERS_4_PAN10M_20190910_168_116_L4_BAND4.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN10M_20190910_168_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -57.810866,
                -15.657363
              ],
              [
                -57.25835,
                -15.741386
              ],
              [
                -57.013694,
                -14.673711
              ],
              [
                -57.563281,
                -14.590097
              ],
              [
                -57.810866,
                -15.657363
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -57.812456,
        -15.739789,
        -57.015783,
        -14.59037
      ],
      "collection": "CBERS4PAN10M",
      "properties": {
        "datetime": "2019-09-10T13:51:21Z",
        "eo:sun_azimuth": 56.1693,
        "eo:sun_elevation": 55.4994,
        "eo:off_nadir": -0.00840441,
        "eo:epsg": 32757,
        "eo:instrument": "PAN10M",
        "cbers:data_type": "L4",
        "cbers:path": 168,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/168/117/CBERS_4_PAN10M_20190910_168_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/168/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN10M/168/117/CBERS_4_PAN10M_20190910_168_117_L4/CBERS_4_PAN10M_20190910_168_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/117/CBERS_4_PAN10M_20190910_168_117_L4/CBERS_4_PAN10M_20190910_168_117_L4_BAND4.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B2": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/117/CBERS_4_PAN10M_20190910_168_117_L4/CBERS_4_PAN10M_20190910_168_117_L4_BAND2.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B3": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/117/CBERS_4_PAN10M_20190910_168_117_L4/CBERS_4_PAN10M_20190910_168_117_L4_BAND3.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B4": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/117/CBERS_4_PAN10M_20190910_168_117_L4/CBERS_4_PAN10M_20190910_168_117_L4_BAND4.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN10M_20190910_168_118_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -58.019724,
                -16.551452
              ],
              [
                -57.464583,
                -16.635843
              ],
              [
                -57.218618,
                -15.568476
              ],
              [
                -57.770644,
                -15.484521
              ],
              [
                -58.019724,
                -16.551452
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -58.021538,
        -16.63305,
        -57.219371,
        -15.48525
      ],
      "collection": "CBERS4PAN10M",
      "properties": {
        "datetime": "2019-09-10T13:51:36Z",
        "eo:sun_azimuth": 55.257,
        "eo:sun_elevation": 54.8814,
        "eo:off_nadir": -0.00840441,
        "eo:epsg": 32757,
        "eo:instrument": "PAN10M",
        "cbers:data_type": "L4",
        "cbers:path": 168,
        "cbers:row": 118
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/168/118/CBERS_4_PAN10M_20190910_168_118_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/168/118/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN10M/168/118/CBERS_4_PAN10M_20190910_168_118_L4/CBERS_4_PAN10M_20190910_168_118.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/118/CBERS_4_PAN10M_20190910_168_118_L4/CBERS_4_PAN10M_20190910_168_118_L4_BAND4.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B2": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/118/CBERS_4_PAN10M_20190910_168_118_L4/CBERS_4_PAN10M_20190910_168_118_L4_BAND2.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B3": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/118/CBERS_4_PAN10M_20190910_168_118_L4/CBERS_4_PAN10M_20190910_168_118_L4_BAND3.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B4": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/168/118/CBERS_4_PAN10M_20190910_168_118_L4/CBERS_4_PAN10M_20190910_168_118_L4_BAND4.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN10M_20190913_167_116_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -56.633872,
                -14.763287
              ],
              [
                -56.083839,
                -14.846955
              ],
              [
                -55.840413,
                -13.77905
              ],
              [
                -56.3877,
                -13.695763
              ],
              [
                -56.633872,
                -14.763287
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -56.634609,
        -14.848847,
        -55.842226,
        -13.694324
      ],
      "collection": "CBERS4PAN10M",
      "properties": {
        "datetime": "2019-09-13T13:47:21Z",
        "eo:sun_azimuth": 58.5217,
        "eo:sun_elevation": 56.9949,
        "eo:off_nadir": -0.00893788,
        "eo:epsg": 32757,
        "eo:instrument": "PAN10M",
        "cbers:data_type": "L4",
        "cbers:path": 167,
        "cbers:row": 116
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/167/116/CBERS_4_PAN10M_20190913_167_116_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/167/116/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN10M/167/116/CBERS_4_PAN10M_20190913_167_116_L4/CBERS_4_PAN10M_20190913_167_116.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/167/116/CBERS_4_PAN10M_20190913_167_116_L4/CBERS_4_PAN10M_20190913_167_116_L4_BAND4.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B2": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/167/116/CBERS_4_PAN10M_20190913_167_116_L4/CBERS_4_PAN10M_20190913_167_116_L4_BAND2.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B3": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/167/116/CBERS_4_PAN10M_20190913_167_116_L4/CBERS_4_PAN10M_20190913_167_116_L4_BAND3.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B4": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/167/116/CBERS_4_PAN10M_20190913_167_116_L4/CBERS_4_PAN10M_20190913_167_116_L4_BAND4.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN10M_20190913_167_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -56.841153,
                -15.656322
              ],
              [
                -56.288653,
                -15.740335
              ],
              [
                -56.044118,
                -14.673148
              ],
              [
                -56.593689,
                -14.589544
              ],
              [
                -56.841153,
                -15.656322
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -56.842618,
        -15.741878,
        -56.045349,
        -14.588239
      ],
      "collection": "CBERS4PAN10M",
      "properties": {
        "datetime": "2019-09-13T13:47:36Z",
        "eo:sun_azimuth": 57.5149,
        "eo:sun_elevation": 56.405,
        "eo:off_nadir": -0.00893788,
        "eo:epsg": 32757,
        "eo:instrument": "PAN10M",
        "cbers:data_type": "L4",
        "cbers:path": 167,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/167/117/CBERS_4_PAN10M_20190913_167_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/167/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN10M/167/117/CBERS_4_PAN10M_20190913_167_117_L4/CBERS_4_PAN10M_20190913_167_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/167/117/CBERS_4_PAN10M_20190913_167_117_L4/CBERS_4_PAN10M_20190913_167_117_L4_BAND4.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B2": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/167/117/CBERS_4_PAN10M_20190913_167_117_L4/CBERS_4_PAN10M_20190913_167_117_L4_BAND2.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B3": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/167/117/CBERS_4_PAN10M_20190913_167_117_L4/CBERS_4_PAN10M_20190913_167_117_L4_BAND3.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B4": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/167/117/CBERS_4_PAN10M_20190913_167_117_L4/CBERS_4_PAN10M_20190913_167_117_L4_BAND4.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN10M_20190916_166_116_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -55.663878,
                -14.762298
              ],
              [
                -55.113852,
                -14.845942
              ],
              [
                -54.870454,
                -13.778041
              ],
              [
                -55.417732,
                -13.694779
              ],
              [
                -55.663878,
                -14.762298
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -55.665395,
        -14.851228,
        -54.873239,
        -13.692052
      ],
      "collection": "CBERS4PAN10M",
      "properties": {
        "datetime": "2019-09-16T13:43:36Z",
        "eo:sun_azimuth": 60.0032,
        "eo:sun_elevation": 57.8775,
        "eo:off_nadir": -0.00853149,
        "eo:epsg": 32757,
        "eo:instrument": "PAN10M",
        "cbers:data_type": "L4",
        "cbers:path": 166,
        "cbers:row": 116
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/166/116/CBERS_4_PAN10M_20190916_166_116_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/166/116/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN10M/166/116/CBERS_4_PAN10M_20190916_166_116_L4/CBERS_4_PAN10M_20190916_166_116.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/116/CBERS_4_PAN10M_20190916_166_116_L4/CBERS_4_PAN10M_20190916_166_116_L4_BAND4.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B2": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/116/CBERS_4_PAN10M_20190916_166_116_L4/CBERS_4_PAN10M_20190916_166_116_L4_BAND2.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B3": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/116/CBERS_4_PAN10M_20190916_166_116_L4/CBERS_4_PAN10M_20190916_166_116_L4_BAND3.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B4": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/116/CBERS_4_PAN10M_20190916_166_116_L4/CBERS_4_PAN10M_20190916_166_116_L4_BAND4.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN10M_20190916_166_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -55.871446,
                -15.656654
              ],
              [
                -55.318949,
                -15.740642
              ],
              [
                -55.074336,
                -14.673015
              ],
              [
                -55.623902,
                -14.589436
              ],
              [
                -55.871446,
                -15.656654
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -55.872977,
        -15.745531,
        -55.076928,
        -14.587063
      ],
      "collection": "CBERS4PAN10M",
      "properties": {
        "datetime": "2019-09-16T13:43:51Z",
        "eo:sun_azimuth": 58.9357,
        "eo:sun_elevation": 57.3045,
        "eo:off_nadir": -0.00853149,
        "eo:epsg": 32757,
        "eo:instrument": "PAN10M",
        "cbers:data_type": "L4",
        "cbers:path": 166,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/166/117/CBERS_4_PAN10M_20190916_166_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/166/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN10M/166/117/CBERS_4_PAN10M_20190916_166_117_L4/CBERS_4_PAN10M_20190916_166_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/117/CBERS_4_PAN10M_20190916_166_117_L4/CBERS_4_PAN10M_20190916_166_117_L4_BAND4.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B2": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/117/CBERS_4_PAN10M_20190916_166_117_L4/CBERS_4_PAN10M_20190916_166_117_L4_BAND2.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B3": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/117/CBERS_4_PAN10M_20190916_166_117_L4/CBERS_4_PAN10M_20190916_166_117_L4_BAND3.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B4": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/117/CBERS_4_PAN10M_20190916_166_117_L4/CBERS_4_PAN10M_20190916_166_117_L4_BAND4.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN10M_20190916_166_118_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -56.080312,
                -16.550893
              ],
              [
                -55.525186,
                -16.63525
              ],
              [
                -55.279243,
                -15.567813
              ],
              [
                -55.83125,
                -15.483893
              ],
              [
                -56.080312,
                -16.550893
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -56.081937,
        -16.63959,
        -55.281364,
        -15.481487
      ],
      "collection": "CBERS4PAN10M",
      "properties": {
        "datetime": "2019-09-16T13:44:06Z",
        "eo:sun_azimuth": 57.9118,
        "eo:sun_elevation": 56.7184,
        "eo:off_nadir": -0.00853149,
        "eo:epsg": 32757,
        "eo:instrument": "PAN10M",
        "cbers:data_type": "L4",
        "cbers:path": 166,
        "cbers:row": 118
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/166/118/CBERS_4_PAN10M_20190916_166_118_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/166/118/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN10M/166/118/CBERS_4_PAN10M_20190916_166_118_L4/CBERS_4_PAN10M_20190916_166_118.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/118/CBERS_4_PAN10M_20190916_166_118_L4/CBERS_4_PAN10M_20190916_166_118_L4_BAND4.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B2": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/118/CBERS_4_PAN10M_20190916_166_118_L4/CBERS_4_PAN10M_20190916_166_118_L4_BAND2.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        },
        "B3": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/118/CBERS_4_PAN10M_20190916_166_118_L4/CBERS_4_PAN10M_20190916_166_118_L4_BAND3.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            1
          ]
        },
        "B4": {
          "href": "s3://cbers-pds/CBERS4/PAN10M/166/118/CBERS_4_PAN10M_20190916_166_118_L4/CBERS_4_PAN10M_20190916_166_118_L4_BAND4.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            2
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN5M_20190910_168_116_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -57.594578,
                -14.760981
              ],
              [
                -57.044616,
                -14.844618
              ],
              [
                -56.801329,
                -13.777342
              ],
              [
                -57.348547,
                -13.694087
              ],
              [
                -57.594578,
                -14.760981
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -57.596076,
        -14.843663,
        -56.802279,
        -13.69406
      ],
      "collection": "CBERS4PAN5M",
      "properties": {
        "datetime": "2019-09-10T13:51:04Z",
        "eo:sun_azimuth": 57.1234,
        "eo:sun_elevation": 56.1073,
        "eo:off_nadir": -0.00840441,
        "eo:epsg": 32757,
        "eo:instrument": "PAN5M",
        "cbers:data_type": "L4",
        "cbers:path": 168,
        "cbers:row": 116
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/168/116/CBERS_4_PAN5M_20190910_168_116_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/168/116/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN5M/168/116/CBERS_4_PAN5M_20190910_168_116_L4/CBERS_4_PAN5M_20190910_168_116.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/168/116/CBERS_4_PAN5M_20190910_168_116_L4/CBERS_4_PAN5M_20190910_168_116_L4_BAND1.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B1": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/168/116/CBERS_4_PAN5M_20190910_168_116_L4/CBERS_4_PAN5M_20190910_168_116_L4_BAND1.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN5M_20190910_168_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -57.802218,
                -15.655557
              ],
              [
                -57.249786,
                -15.739538
              ],
              [
                -57.005283,
                -14.672508
              ],
              [
                -57.554788,
                -14.588936
              ],
              [
                -57.802218,
                -15.655557
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -57.803814,
        -15.737787,
        -57.005988,
        -14.589331
      ],
      "collection": "CBERS4PAN5M",
      "properties": {
        "datetime": "2019-09-10T13:51:19Z",
        "eo:sun_azimuth": 56.171,
        "eo:sun_elevation": 55.5003,
        "eo:off_nadir": -0.00840441,
        "eo:epsg": 32757,
        "eo:instrument": "PAN5M",
        "cbers:data_type": "L4",
        "cbers:path": 168,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/168/117/CBERS_4_PAN5M_20190910_168_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/168/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN5M/168/117/CBERS_4_PAN5M_20190910_168_117_L4/CBERS_4_PAN5M_20190910_168_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/168/117/CBERS_4_PAN5M_20190910_168_117_L4/CBERS_4_PAN5M_20190910_168_117_L4_BAND1.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B1": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/168/117/CBERS_4_PAN5M_20190910_168_117_L4/CBERS_4_PAN5M_20190910_168_117_L4_BAND1.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN5M_20190910_168_118_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -58.011114,
                -16.549817
              ],
              [
                -57.456056,
                -16.634167
              ],
              [
                -57.21023,
                -15.567385
              ],
              [
                -57.762175,
                -15.483472
              ],
              [
                -58.011114,
                -16.549817
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -58.012717,
        -16.631512,
        -57.210886,
        -15.484309
      ],
      "collection": "CBERS4PAN5M",
      "properties": {
        "datetime": "2019-09-10T13:51:34Z",
        "eo:sun_azimuth": 55.2585,
        "eo:sun_elevation": 54.8822,
        "eo:off_nadir": -0.00840441,
        "eo:epsg": 32757,
        "eo:instrument": "PAN5M",
        "cbers:data_type": "L4",
        "cbers:path": 168,
        "cbers:row": 118
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/168/118/CBERS_4_PAN5M_20190910_168_118_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/168/118/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN5M/168/118/CBERS_4_PAN5M_20190910_168_118_L4/CBERS_4_PAN5M_20190910_168_118.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/168/118/CBERS_4_PAN5M_20190910_168_118_L4/CBERS_4_PAN5M_20190910_168_118_L4_BAND1.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B1": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/168/118/CBERS_4_PAN5M_20190910_168_118_L4/CBERS_4_PAN5M_20190910_168_118_L4_BAND1.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN5M_20190913_167_116_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -56.625229,
                -14.761486
              ],
              [
                -56.075279,
                -14.845113
              ],
              [
                -55.832009,
                -13.777864
              ],
              [
                -56.379214,
                -13.694618
              ],
              [
                -56.625229,
                -14.761486
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -56.626199,
        -14.847251,
        -55.833495,
        -13.692927
      ],
      "collection": "CBERS4PAN5M",
      "properties": {
        "datetime": "2019-09-13T13:47:19Z",
        "eo:sun_azimuth": 58.5235,
        "eo:sun_elevation": 56.9958,
        "eo:off_nadir": -0.00893788,
        "eo:epsg": 32757,
        "eo:instrument": "PAN5M",
        "cbers:data_type": "L4",
        "cbers:path": 167,
        "cbers:row": 116
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/167/116/CBERS_4_PAN5M_20190913_167_116_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/167/116/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN5M/167/116/CBERS_4_PAN5M_20190913_167_116_L4/CBERS_4_PAN5M_20190913_167_116.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/167/116/CBERS_4_PAN5M_20190913_167_116_L4/CBERS_4_PAN5M_20190913_167_116_L4_BAND1.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B1": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/167/116/CBERS_4_PAN5M_20190913_167_116_L4/CBERS_4_PAN5M_20190913_167_116_L4_BAND1.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN5M_20190913_167_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -56.832622,
                -15.655009
              ],
              [
                -56.280205,
                -15.73898
              ],
              [
                -56.035708,
                -14.671943
              ],
              [
                -56.585197,
                -14.58838
              ],
              [
                -56.832622,
                -15.655009
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -56.833845,
        -15.740516,
        -56.036953,
        -14.587029
      ],
      "collection": "CBERS4PAN5M",
      "properties": {
        "datetime": "2019-09-13T13:47:34Z",
        "eo:sun_azimuth": 57.5164,
        "eo:sun_elevation": 56.4058,
        "eo:off_nadir": -0.00893788,
        "eo:epsg": 32757,
        "eo:instrument": "PAN5M",
        "cbers:data_type": "L4",
        "cbers:path": 167,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/167/117/CBERS_4_PAN5M_20190913_167_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/167/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN5M/167/117/CBERS_4_PAN5M_20190913_167_117_L4/CBERS_4_PAN5M_20190913_167_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/167/117/CBERS_4_PAN5M_20190913_167_117_L4/CBERS_4_PAN5M_20190913_167_117_L4_BAND1.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B1": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/167/117/CBERS_4_PAN5M_20190913_167_117_L4/CBERS_4_PAN5M_20190913_167_117_L4_BAND1.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN5M_20190916_166_116_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -55.655276,
                -14.760688
              ],
              [
                -55.105333,
                -14.84429
              ],
              [
                -54.862077,
                -13.776995
              ],
              [
                -55.409275,
                -13.693774
              ],
              [
                -55.655276,
                -14.760688
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -55.656808,
        -14.849777,
        -54.864654,
        -13.690938
      ],
      "collection": "CBERS4PAN5M",
      "properties": {
        "datetime": "2019-09-16T13:43:34Z",
        "eo:sun_azimuth": 60.0049,
        "eo:sun_elevation": 57.8783,
        "eo:off_nadir": -0.00853149,
        "eo:epsg": 32757,
        "eo:instrument": "PAN5M",
        "cbers:data_type": "L4",
        "cbers:path": 166,
        "cbers:row": 116
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/166/116/CBERS_4_PAN5M_20190916_166_116_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/166/116/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN5M/166/116/CBERS_4_PAN5M_20190916_166_116_L4/CBERS_4_PAN5M_20190916_166_116.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/166/116/CBERS_4_PAN5M_20190916_166_116_L4/CBERS_4_PAN5M_20190916_166_116_L4_BAND1.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B1": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/166/116/CBERS_4_PAN5M_20190916_166_116_L4/CBERS_4_PAN5M_20190916_166_116_L4_BAND1.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN5M_20190916_166_117_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -55.862804,
                -15.654881
              ],
              [
                -55.310391,
                -15.738828
              ],
              [
                -55.065918,
                -14.671792
              ],
              [
                -55.615403,
                -14.588253
              ],
              [
                -55.862804,
                -15.654881
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -55.864213,
        -15.743994,
        -55.068357,
        -14.585637
      ],
      "collection": "CBERS4PAN5M",
      "properties": {
        "datetime": "2019-09-16T13:43:49Z",
        "eo:sun_azimuth": 58.9375,
        "eo:sun_elevation": 57.3053,
        "eo:off_nadir": -0.00853149,
        "eo:epsg": 32757,
        "eo:instrument": "PAN5M",
        "cbers:data_type": "L4",
        "cbers:path": 166,
        "cbers:row": 117
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/166/117/CBERS_4_PAN5M_20190916_166_117_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/166/117/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN5M/166/117/CBERS_4_PAN5M_20190916_166_117_L4/CBERS_4_PAN5M_20190916_166_117.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/166/117/CBERS_4_PAN5M_20190916_166_117_L4/CBERS_4_PAN5M_20190916_166_117_L4_BAND1.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B1": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/166/117/CBERS_4_PAN5M_20190916_166_117_L4/CBERS_4_PAN5M_20190916_166_117_L4_BAND1.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        }
      }
    },
    {
      "id": "CBERS_4_PAN5M_20190916_166_118_L4",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          [
            [
              [
                -56.071683,
                -16.549196
              ],
              [
                -55.516643,
                -16.633512
              ],
              [
                -55.270851,
                -15.566717
              ],
              [
                -55.822776,
                -15.482839
              ],
              [
                -56.071683,
                -16.549196
              ]
            ]
          ]
        ]
      },
      "bbox": [
        -56.07313,
        -16.63815,
        -55.273078,
        -15.480474
      ],
      "collection": "CBERS4PAN5M",
      "properties": {
        "datetime": "2019-09-16T13:44:04Z",
        "eo:sun_azimuth": 57.9135,
        "eo:sun_elevation": 56.7192,
        "eo:off_nadir": -0.00853149,
        "eo:epsg": 32757,
        "eo:instrument": "PAN5M",
        "cbers:data_type": "L4",
        "cbers:path": 166,
        "cbers:row": 118
      },
      "links": [
        {
          "rel": "self",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/166/118/CBERS_4_PAN5M_20190916_166_118_L4.json"
        },
        {
          "rel": "parent",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/166/118/catalog.json"
        },
        {
          "rel": "collection",
          "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/collection.json"
        }
      ],
      "assets": {
        "thumbnail": {
          "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN5M/166/118/CBERS_4_PAN5M_20190916_166_118_L4/CBERS_4_PAN5M_20190916_166_118.jpg",
          "type": "image/jpeg"
        },
        "metadata": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/166/118/CBERS_4_PAN5M_20190916_166_118_L4/CBERS_4_PAN5M_20190916_166_118_L4_BAND1.xml",
          "title": "INPE original metadata",
          "type": "text/xml"
        },
        "B1": {
          "href": "s3://cbers-pds/CBERS4/PAN5M/166/118/CBERS_4_PAN5M_20190916_166_118_L4/CBERS_4_PAN5M_20190916_166_118_L4_BAND1.tif",
          "type": "image/vnd.stac.geotiff; cloud-optimized=true",
          "eo:bands": [
            0
          ]
        }
      }
    }
  ]

}
