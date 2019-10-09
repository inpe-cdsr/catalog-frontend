// example of features

export let LANDSAT = {
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

export let SENTINEL = {
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

export let CBERS = {
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

export let FEATURES = [
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

export let FEATURES_BY_PROVIDERS = {
  "development_seed_stac": {
    "landsat-8-l1": {
      "features": [
        {
          "type": "Feature",
          "id": "LC81790502019253",
          "bbox": [
            22.47504,
            13.39677,
            24.59844,
            15.50557
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  22.846659356531266,
                  15.50426714414689
                ],
                [
                  24.596348395883275,
                  15.158301710146734
                ],
                [
                  24.225438107317917,
                  13.397313613096273
                ],
                [
                  22.47760891890306,
                  13.750569266181536
                ],
                [
                  22.846659356531266,
                  15.50426714414689
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
            "datetime": "2019-09-10T08:47:01.658349+00:00",
            "eo:sun_azimuth": 109.44412183,
            "eo:sun_elevation": 64.56172537,
            "eo:cloud_cover": 14,
            "eo:row": "050",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179050_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790502019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32634
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790502019253"
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
          "id": "LC81790492019253",
          "bbox": [
            22.79105,
            14.83755,
            24.92839,
            16.9508
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  23.160831114218237,
                  16.94936392300221
                ],
                [
                  24.927890326462162,
                  16.606285725625405
                ],
                [
                  24.55697167198954,
                  14.839924801801779
                ],
                [
                  22.79196988093908,
                  15.190696561999676
                ],
                [
                  23.160831114218237,
                  16.94936392300221
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
            "datetime": "2019-09-10T08:46:37.750365+00:00",
            "eo:sun_azimuth": 112.47850937,
            "eo:sun_elevation": 64.24584385,
            "eo:cloud_cover": 3,
            "eo:row": "049",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179049_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790492019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32634
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790492019253"
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
          "id": "LC81790482019253",
          "bbox": [
            23.0728,
            16.26417,
            25.27419,
            18.41511
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  23.501558365703975,
                  18.414101459913617
                ],
                [
                  25.271555406731068,
                  18.019078381430905
                ],
                [
                  24.845387260158503,
                  16.264669781387656
                ],
                [
                  23.075503711075857,
                  16.662928691048
                ],
                [
                  23.501558365703975,
                  18.414101459913617
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
            "datetime": "2019-09-10T08:46:13.838146+00:00",
            "eo:sun_azimuth": 115.43589951,
            "eo:sun_elevation": 63.85738341,
            "eo:cloud_cover": 7,
            "eo:row": "048",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179048_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790482019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32635
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/048/LC08_L1TP_179048_20190910_20190917_01_T1/LC08_L1TP_179048_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790482019253"
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
          "id": "LC81790472019253",
          "bbox": [
            23.39316,
            17.70749,
            25.60886,
            19.85724
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  23.824951304312993,
                  19.85530483957681
                ],
                [
                  25.608571514186902,
                  19.46083438440244
                ],
                [
                  25.178943582315,
                  17.707821447746742
                ],
                [
                  23.395660032204937,
                  18.10597809909376
                ],
                [
                  23.824951304312993,
                  19.85530483957681
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
            "datetime": "2019-09-10T08:45:49.938635+00:00",
            "eo:sun_azimuth": 118.30211899,
            "eo:sun_elevation": 63.39988118,
            "eo:cloud_cover": 0,
            "eo:row": "047",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179047_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790472019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32635
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/047/LC08_L1TP_179047_20190910_20190917_01_T1/LC08_L1TP_179047_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790472019253"
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
          "id": "LC81790462019253",
          "bbox": [
            23.71724,
            19.14832,
            25.95097,
            21.29619
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  24.15135405386295,
                  21.295712774334255
                ],
                [
                  25.94954333982675,
                  20.902268818874997
                ],
                [
                  25.51709294457016,
                  19.150870105901863
                ],
                [
                  23.71947950088115,
                  19.548472022261567
                ],
                [
                  24.15135405386295,
                  21.295712774334255
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
            "datetime": "2019-09-10T08:45:26.039124+00:00",
            "eo:sun_azimuth": 121.06927635,
            "eo:sun_elevation": 62.87665485,
            "eo:cloud_cover": 0,
            "eo:row": "046",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179046_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790462019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32635
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/046/LC08_L1TP_179046_20190910_20190917_01_T1/LC08_L1TP_179046_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790462019253"
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
          "id": "LC81790452019253",
          "bbox": [
            24.04566,
            20.59193,
            26.29843,
            22.73716
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  24.481827229183477,
                  22.73563280580467
                ],
                [
                  26.29550628376557,
                  22.34352861807483
                ],
                [
                  25.859884149252956,
                  20.594310862874067
                ],
                [
                  24.047006911268525,
                  20.990962940943312
                ],
                [
                  24.481827229183477,
                  22.73563280580467
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
            "datetime": "2019-09-10T08:45:02.131140+00:00",
            "eo:sun_azimuth": 123.73151733,
            "eo:sun_elevation": 62.29130667,
            "eo:cloud_cover": 0,
            "eo:row": "045",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179045_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790452019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32635
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/045/LC08_L1TP_179045_20190910_20190917_01_T1/LC08_L1TP_179045_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790452019253"
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
          "id": "LC81790442019253",
          "bbox": [
            24.37636,
            22.03539,
            26.64916,
            24.17457
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  24.815949077940058,
                  24.17378567584817
                ],
                [
                  26.64608971173368,
                  23.783557642664118
                ],
                [
                  26.208252445362216,
                  22.037108253597896
                ],
                [
                  24.379149808294336,
                  22.43233409943186
                ],
                [
                  24.815949077940058,
                  24.17378567584817
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
            "datetime": "2019-09-10T08:44:38.231630+00:00",
            "eo:sun_azimuth": 126.28278719,
            "eo:sun_elevation": 61.64817701,
            "eo:cloud_cover": 0,
            "eo:row": "044",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179044_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790442019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32635
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/044/LC08_L1TP_179044_20190910_20190917_01_T1/LC08_L1TP_179044_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790442019253"
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
          "id": "LC81790432019253",
          "bbox": [
            24.71299,
            23.47861,
            27.00398,
            25.61095
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  25.154912976079284,
                  25.610625371368155
                ],
                [
                  27.002693369742232,
                  25.22274430820784
                ],
                [
                  26.562055844229608,
                  23.479328760737207
                ],
                [
                  24.715548893669755,
                  23.87265111906342
                ],
                [
                  25.154912976079284,
                  25.610625371368155
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
            "datetime": "2019-09-10T08:44:14.336355+00:00",
            "eo:sun_azimuth": 128.72178688,
            "eo:sun_elevation": 60.9510364,
            "eo:cloud_cover": 0,
            "eo:row": "043",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179043_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790432019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32635
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/043/LC08_L1TP_179043_20190910_20190917_01_T1/LC08_L1TP_179043_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790432019253"
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
          "id": "LC81790422019253",
          "bbox": [
            25.05635,
            24.92141,
            27.37309,
            27.04884
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  25.500067900301232,
                  27.047094521989457
                ],
                [
                  27.37203205633946,
                  26.662084819417665
                ],
                [
                  26.928000728121173,
                  24.92191169189897
                ],
                [
                  25.0575644949241,
                  25.312840978659388
                ],
                [
                  25.500067900301232,
                  27.047094521989457
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
            "datetime": "2019-09-10T08:43:50.432606+00:00",
            "eo:sun_azimuth": 131.04991243,
            "eo:sun_elevation": 60.20346158,
            "eo:cloud_cover": 0,
            "eo:row": "042",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179042_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790422019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32635
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/042/LC08_L1TP_179042_20190910_20190917_01_T1/LC08_L1TP_179042_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790422019253"
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
          "id": "LC81790412019253",
          "bbox": [
            25.40441,
            26.36361,
            27.75192,
            28.48265
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  25.850882204047096,
                  28.481316153281107
                ],
                [
                  27.748837902611218,
                  28.09969306200883
                ],
                [
                  27.30134330356896,
                  26.364171567874234
                ],
                [
                  25.40516234830441,
                  26.752154807627086
                ],
                [
                  25.850882204047096,
                  28.481316153281107
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
            "datetime": "2019-09-10T08:43:26.537331+00:00",
            "eo:sun_azimuth": 133.26718107,
            "eo:sun_elevation": 59.40972085,
            "eo:cloud_cover": 0,
            "eo:row": "041",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179041_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790412019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32635
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/041/LC08_L1TP_179041_20190910_20190917_01_T1/LC08_L1TP_179041_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790412019253"
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
      ]
    },
    "sentinel-2-l1c": {
      "features": [
        {
          "type": "Feature",
          "id": "S2B_33SWC_20190910_0",
          "bbox": [
            14.999781044224273,
            37.85618438205922,
            16.21456277065522,
            38.84898947181679
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  15.877080016313613,
                  37.85618438205922
                ],
                [
                  14.999784004087461,
                  37.85945097203489
                ],
                [
                  14.999781044224273,
                  38.84898947181679
                ],
                [
                  16.21456277065522,
                  38.84267462359775
                ],
                [
                  15.877080016313613,
                  37.85618438205922
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
            "datetime": "2019-09-10T10:00:02.574000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 30.13,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "S",
            "sentinel:grid_square": "WC",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33SWC_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WC/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WC/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WC/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33SWC_20190910_0"
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
          "id": "S2B_33SXC_20190910_0",
          "bbox": [
            16.150593638902283,
            38.65845492212704,
            16.214563961922376,
            38.84329410998903
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.150593638902283,
                  38.65845492212704
                ],
                [
                  16.153453975459126,
                  38.84329410998903
                ],
                [
                  16.214563961922376,
                  38.84267461120965
                ],
                [
                  16.150593638902283,
                  38.65845492212704
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
            "datetime": "2019-09-10T09:59:52.893000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 49.81,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "S",
            "sentinel:grid_square": "XC",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33SXC_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XC/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XC/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XC/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33SXC_20190910_0"
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
          "id": "S2B_33SWD_20190910_0",
          "bbox": [
            14.999778218370487,
            38.7548744668534,
            16.28126851320822,
            39.7502589163948
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.18419482992294,
                  38.7548744668534
                ],
                [
                  14.99978131374438,
                  38.76087346847721
                ],
                [
                  14.999778218370487,
                  39.7502589163948
                ],
                [
                  16.28126851320822,
                  39.74318731254915
                ],
                [
                  16.267765139266366,
                  39.00057593550751
                ],
                [
                  16.24703621179129,
                  38.936094281813276
                ],
                [
                  16.18419482992294,
                  38.7548744668534
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
            "datetime": "2019-09-10T09:59:48.323000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 50.56,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "S",
            "sentinel:grid_square": "WD",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33SWD_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WD/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WD/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WD/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33SWD_20190910_0"
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
          "id": "S2B_33SXD_20190910_0",
          "bbox": [
            16.150883870881906,
            38.75487444906889,
            16.528115327073785,
            39.74439077038703
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.18419658515439,
                  38.75487444906889
                ],
                [
                  16.150883870881906,
                  38.75520723472507
                ],
                [
                  16.16716947282098,
                  39.74439077038703
                ],
                [
                  16.528115327073785,
                  39.74019976929493
                ],
                [
                  16.18419658515439,
                  38.75487444906889
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
            "datetime": "2019-09-10T09:59:42.919000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 80.22,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "S",
            "sentinel:grid_square": "XD",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33SXD_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XD/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XD/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XD/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33SXD_20190910_0"
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
          "id": "S2B_33TWE_20190910_0",
          "bbox": [
            14.999775264333282,
            39.65456644304081,
            16.298328663178285,
            40.650847506566784
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.27963059106329,
                  39.65456644304081
                ],
                [
                  14.999778501981563,
                  39.66161596790567
                ],
                [
                  14.999775264333282,
                  40.650847506566784
                ],
                [
                  16.298328663178285,
                  40.64354834012355
                ],
                [
                  16.27963059106329,
                  39.65456644304081
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
            "datetime": "2019-09-10T09:59:34.153000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 74.96,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "WE",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TWE_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WE/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WE/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WE/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TWE_20190910_0"
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
          "id": "S2B_33TXE_20190910_0",
          "bbox": [
            16.165677325802505,
            39.6519657955248,
            16.848118332176362,
            40.64479052153661
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.497156996253665,
                  39.6519657955248
                ],
                [
                  16.165677325802505,
                  39.65576614375439
                ],
                [
                  16.18271128824437,
                  40.64479052153661
                ],
                [
                  16.848118332176362,
                  40.63605664649598
                ],
                [
                  16.497156996253665,
                  39.6519657955248
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
            "datetime": "2019-09-10T09:59:30.207000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 76.22,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "XE",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TXE_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XE/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XE/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XE/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TXE_20190910_0"
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
          "id": "S2B_33TWF_20190910_0",
          "bbox": [
            14.999772171826372,
            40.555482279926174,
            16.316188256367813,
            41.55183566226867
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.296625711572222,
                  40.555482279926174
                ],
                [
                  14.999775559208345,
                  40.56275892201299
                ],
                [
                  14.999772171826372,
                  41.55183566226867
                ],
                [
                  16.316188256367813,
                  41.5443026672023
                ],
                [
                  16.296625711572222,
                  40.555482279926174
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
            "datetime": "2019-09-10T09:59:19.656000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 54.42,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "WF",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TWF_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WF/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WF/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WF/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TWF_20190910_0"
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
          "id": "S2B_33TXF_20190910_0",
          "bbox": [
            16.181159895858748,
            40.5484721225152,
            17.17615037648367,
            41.54558463811687
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.816781428314055,
                  40.5484721225152
                ],
                [
                  16.181159895858748,
                  40.55672062845843
                ],
                [
                  16.19898143556844,
                  41.54558463811687
                ],
                [
                  17.17615037648367,
                  41.531240535935545
                ],
                [
                  16.816781428314055,
                  40.5484721225152
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
            "datetime": "2019-09-10T09:59:15.788000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 85.08,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "XF",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TXF_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XF/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XF/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XF/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TXF_20190910_0"
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
          "id": "S2B_33TWG_20190910_0",
          "bbox": [
            14.999768935314851,
            41.45625103906916,
            16.334879219209856,
            42.45268219276705
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.31440633099948,
                  41.45625103906916
                ],
                [
                  14.999772480380537,
                  41.463760894243656
                ],
                [
                  14.999768935314851,
                  42.45268219276705
                ],
                [
                  16.334879219209856,
                  42.44490886194977
                ],
                [
                  16.31440633099948,
                  41.45625103906916
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
            "datetime": "2019-09-10T09:59:05.354000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 64.85,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "WG",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TWG_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WG/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WG/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WG/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TWG_20190910_0"
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
          "id": "S2B_33TXG_20190910_0",
          "bbox": [
            16.197358094006223,
            41.4437812911678,
            17.51178427557763,
            42.446231729279084
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  17.143784730735423,
                  41.4437812911678
                ],
                [
                  16.197358094006223,
                  41.4575290723945
                ],
                [
                  16.21600900581534,
                  42.446231729279084
                ],
                [
                  17.51178427557763,
                  42.425154143031065
                ],
                [
                  17.143784730735423,
                  41.4437812911678
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
            "datetime": "2019-09-10T09:59:01.204000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 57.61,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "XG",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TXG_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XG/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XG/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XG/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TXG_20190910_0"
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
      ]
    }
  },
  "kepler_stac": {
    "cbers4mux": {
      "features": [
        {
          "id": "CBERS_4_MUX_20190905_083_084_L4",
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    30.285026,
                    13.894313
                  ],
                  [
                    31.388157,
                    13.723681
                  ],
                  [
                    31.634944,
                    14.785162
                  ],
                  [
                    30.526705,
                    14.956548
                  ],
                  [
                    30.285026,
                    13.894313
                  ]
                ]
              ]
            ]
          },
          "bbox": [
            30.284656,
            13.704901,
            31.637122,
            14.987552
          ],
          "collection": "CBERS4MUX",
          "properties": {
            "datetime": "2019-09-05T08:14:43Z",
            "eo:sun_azimuth": 104.468,
            "eo:sun_elevation": 64.7035,
            "eo:off_nadir": -0.00829945,
            "eo:epsg": 32633,
            "eo:instrument": "MUX",
            "cbers:data_type": "L4",
            "cbers:path": 83,
            "cbers:row": 84
          },
          "links": [
            {
              "rel": "self",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4.json"
            },
            {
              "rel": "parent",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/083/084/catalog.json"
            },
            {
              "rel": "collection",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
            }
          ],
          "assets": {
            "thumbnail": {
              "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084.jpg",
              "type": "image/jpeg"
            },
            "metadata": {
              "href": "s3://cbers-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084_L4_BAND6.xml",
              "title": "INPE original metadata",
              "type": "text/xml"
            },
            "B5": {
              "href": "s3://cbers-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084_L4_BAND5.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                0
              ]
            },
            "B6": {
              "href": "s3://cbers-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084_L4_BAND6.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                1
              ]
            },
            "B7": {
              "href": "s3://cbers-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084_L4_BAND7.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                2
              ]
            },
            "B8": {
              "href": "s3://cbers-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084_L4_BAND8.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                3
              ]
            }
          }
        }
      ]
    },
    "cbers4awfi": {
      "features": [
        {
          "id": "CBERS_4_AWFI_20190903_075_087_L4",
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    33.339157,
                    8.94124
                  ],
                  [
                    41.288007,
                    7.704847
                  ],
                  [
                    42.92097,
                    14.469573
                  ],
                  [
                    34.777676,
                    15.734493
                  ],
                  [
                    33.339157,
                    8.94124
                  ]
                ]
              ]
            ]
          },
          "bbox": [
            33.352991,
            7.63751,
            42.957276,
            15.81771
          ],
          "collection": "CBERS4AWFI",
          "properties": {
            "datetime": "2019-09-03T07:44:30Z",
            "eo:sun_azimuth": 98.4154,
            "eo:sun_elevation": 65.3492,
            "eo:off_nadir": -0.00866205,
            "eo:epsg": 32639,
            "eo:instrument": "AWFI",
            "cbers:data_type": "L4",
            "cbers:path": 75,
            "cbers:row": 87
          },
          "links": [
            {
              "rel": "self",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4.json"
            },
            {
              "rel": "parent",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/075/087/catalog.json"
            },
            {
              "rel": "collection",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
            }
          ],
          "assets": {
            "thumbnail": {
              "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087.jpg",
              "type": "image/jpeg"
            },
            "metadata": {
              "href": "s3://cbers-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087_L4_BAND14.xml",
              "title": "INPE original metadata",
              "type": "text/xml"
            },
            "B13": {
              "href": "s3://cbers-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087_L4_BAND13.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                0
              ]
            },
            "B14": {
              "href": "s3://cbers-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087_L4_BAND14.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                1
              ]
            },
            "B15": {
              "href": "s3://cbers-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087_L4_BAND15.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                2
              ]
            },
            "B16": {
              "href": "s3://cbers-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087_L4_BAND16.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                3
              ]
            }
          }
        },
        {
          "id": "CBERS_4_AWFI_20190908_082_087_L4",
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    26.590074,
                    8.941495
                  ],
                  [
                    34.538007,
                    7.705317
                  ],
                  [
                    36.16961,
                    14.471115
                  ],
                  [
                    28.030385,
                    15.735301
                  ],
                  [
                    26.590074,
                    8.941495
                  ]
                ]
              ]
            ]
          },
          "bbox": [
            26.606886,
            7.625357,
            36.200605,
            15.847539
          ],
          "collection": "CBERS4AWFI",
          "properties": {
            "datetime": "2019-09-08T08:11:43Z",
            "eo:sun_azimuth": 103.01,
            "eo:sun_elevation": 65.3458,
            "eo:off_nadir": -0.00820021,
            "eo:epsg": 32633,
            "eo:instrument": "AWFI",
            "cbers:data_type": "L4",
            "cbers:path": 82,
            "cbers:row": 87
          },
          "links": [
            {
              "rel": "self",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4.json"
            },
            {
              "rel": "parent",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/082/087/catalog.json"
            },
            {
              "rel": "collection",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
            }
          ],
          "assets": {
            "thumbnail": {
              "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087.jpg",
              "type": "image/jpeg"
            },
            "metadata": {
              "href": "s3://cbers-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087_L4_BAND14.xml",
              "title": "INPE original metadata",
              "type": "text/xml"
            },
            "B13": {
              "href": "s3://cbers-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087_L4_BAND13.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                0
              ]
            },
            "B14": {
              "href": "s3://cbers-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087_L4_BAND14.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                1
              ]
            },
            "B15": {
              "href": "s3://cbers-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087_L4_BAND15.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                2
              ]
            },
            "B16": {
              "href": "s3://cbers-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087_L4_BAND16.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                3
              ]
            }
          }
        }
      ]
    },
    "cbers4pan10m": {
      "features": [
        {
          "id": "CBERS_4_PAN10M_20190905_083_084_L2",
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    30.836166,
                    13.896311
                  ],
                  [
                    31.381123,
                    13.81242
                  ],
                  [
                    31.629542,
                    14.880699
                  ],
                  [
                    31.082044,
                    14.965014
                  ],
                  [
                    30.836166,
                    13.896311
                  ]
                ]
              ]
            ]
          },
          "bbox": [
            30.836868,
            13.808216,
            31.629056,
            14.969155
          ],
          "collection": "CBERS4PAN10M",
          "properties": {
            "datetime": "2019-09-05T08:14:43Z",
            "eo:sun_azimuth": 104.69,
            "eo:sun_elevation": 64.9599,
            "eo:off_nadir": -0.00829945,
            "eo:epsg": 32633,
            "eo:instrument": "PAN10M",
            "cbers:data_type": "L2",
            "cbers:path": 83,
            "cbers:row": 84
          },
          "links": [
            {
              "rel": "self",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2.json"
            },
            {
              "rel": "parent",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/083/084/catalog.json"
            },
            {
              "rel": "collection",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/collection.json"
            }
          ],
          "assets": {
            "thumbnail": {
              "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2/CBERS_4_PAN10M_20190905_083_084.jpg",
              "type": "image/jpeg"
            },
            "metadata": {
              "href": "s3://cbers-pds/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2/CBERS_4_PAN10M_20190905_083_084_L2_BAND4.xml",
              "title": "INPE original metadata",
              "type": "text/xml"
            },
            "B2": {
              "href": "s3://cbers-pds/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2/CBERS_4_PAN10M_20190905_083_084_L2_BAND2.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                0
              ]
            },
            "B3": {
              "href": "s3://cbers-pds/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2/CBERS_4_PAN10M_20190905_083_084_L2_BAND3.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                1
              ]
            },
            "B4": {
              "href": "s3://cbers-pds/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2/CBERS_4_PAN10M_20190905_083_084_L2_BAND4.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                2
              ]
            }
          }
        }
      ]
    },
    "cbers4pan5m": {
      "features": [
        {
          "id": "CBERS_4_PAN5M_20190905_083_084_L2",
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    30.844747,
                    13.898112
                  ],
                  [
                    31.389626,
                    13.814269
                  ],
                  [
                    31.63789,
                    14.881875
                  ],
                  [
                    31.090472,
                    14.966142
                  ],
                  [
                    30.844747,
                    13.898112
                  ]
                ]
              ]
            ]
          },
          "bbox": [
            30.845543,
            13.810054,
            31.637372,
            14.970108
          ],
          "collection": "CBERS4PAN5M",
          "properties": {
            "datetime": "2019-09-05T08:14:41Z",
            "eo:sun_azimuth": 104.693,
            "eo:sun_elevation": 64.9596,
            "eo:off_nadir": -0.00829945,
            "eo:epsg": 32633,
            "eo:instrument": "PAN5M",
            "cbers:data_type": "L2",
            "cbers:path": 83,
            "cbers:row": 84
          },
          "links": [
            {
              "rel": "self",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/083/084/CBERS_4_PAN5M_20190905_083_084_L2.json"
            },
            {
              "rel": "parent",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/083/084/catalog.json"
            },
            {
              "rel": "collection",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/collection.json"
            }
          ],
          "assets": {
            "thumbnail": {
              "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN5M/083/084/CBERS_4_PAN5M_20190905_083_084_L2/CBERS_4_PAN5M_20190905_083_084.jpg",
              "type": "image/jpeg"
            },
            "metadata": {
              "href": "s3://cbers-pds/CBERS4/PAN5M/083/084/CBERS_4_PAN5M_20190905_083_084_L2/CBERS_4_PAN5M_20190905_083_084_L2_BAND1.xml",
              "title": "INPE original metadata",
              "type": "text/xml"
            },
            "B1": {
              "href": "s3://cbers-pds/CBERS4/PAN5M/083/084/CBERS_4_PAN5M_20190905_083_084_L2/CBERS_4_PAN5M_20190905_083_084_L2_BAND1.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                0
              ]
            }
          }
        }
      ]
    }
  },
  "type": "[Explore Component] Features Separate by Providers"
}

export let FEATURES_BY_PROVIDERS_SAMPLE = {
  "development_seed_stac": {
    "landsat-8-l1": {
      "features": [
        {
          "type": "Feature",
          "id": "LC81790502019253",
          "bbox": [
            22.47504,
            13.39677,
            24.59844,
            15.50557
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  22.846659356531266,
                  15.50426714414689
                ],
                [
                  24.596348395883275,
                  15.158301710146734
                ],
                [
                  24.225438107317917,
                  13.397313613096273
                ],
                [
                  22.47760891890306,
                  13.750569266181536
                ],
                [
                  22.846659356531266,
                  15.50426714414689
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
            "datetime": "2019-09-10T08:47:01.658349+00:00",
            "eo:sun_azimuth": 109.44412183,
            "eo:sun_elevation": 64.56172537,
            "eo:cloud_cover": 14,
            "eo:row": "050",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179050_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790502019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32634
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/050/LC08_L1TP_179050_20190910_20190917_01_T1/LC08_L1TP_179050_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790502019253"
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
          "id": "LC81790492019253",
          "bbox": [
            22.79105,
            14.83755,
            24.92839,
            16.9508
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  23.160831114218237,
                  16.94936392300221
                ],
                [
                  24.927890326462162,
                  16.606285725625405
                ],
                [
                  24.55697167198954,
                  14.839924801801779
                ],
                [
                  22.79196988093908,
                  15.190696561999676
                ],
                [
                  23.160831114218237,
                  16.94936392300221
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
            "datetime": "2019-09-10T08:46:37.750365+00:00",
            "eo:sun_azimuth": 112.47850937,
            "eo:sun_elevation": 64.24584385,
            "eo:cloud_cover": 3,
            "eo:row": "049",
            "eo:column": "179",
            "landsat:product_id": "LC08_L1TP_179049_20190910_20190917_01_T1",
            "landsat:scene_id": "LC81790492019253LGN00",
            "landsat:processing_level": "L1TP",
            "landsat:tier": "T1",
            "landsat:revision": "00",
            "eo:epsg": 32634
          },
          "assets": {
            "index": {
              "type": "text/html",
              "title": "HTML index page",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_MTL.txt"
            },
            "thumbnail": {
              "title": "Thumbnail image",
              "type": "image/jpeg",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_thumb_large.jpg"
            },
            "B1": {
              "type": "image/x.geotiff",
              "eo:bands": [
                0
              ],
              "title": "Band 1 (coastal)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B1.TIF"
            },
            "B2": {
              "type": "image/x.geotiff",
              "eo:bands": [
                1
              ],
              "title": "Band 2 (blue)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B2.TIF"
            },
            "B3": {
              "type": "image/x.geotiff",
              "eo:bands": [
                2
              ],
              "title": "Band 3 (green)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B3.TIF"
            },
            "B4": {
              "type": "image/x.geotiff",
              "eo:bands": [
                3
              ],
              "title": "Band 4 (red)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B4.TIF"
            },
            "B5": {
              "type": "image/x.geotiff",
              "eo:bands": [
                4
              ],
              "title": "Band 5 (nir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B5.TIF"
            },
            "B6": {
              "type": "image/x.geotiff",
              "eo:bands": [
                5
              ],
              "title": "Band 6 (swir16)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B6.TIF"
            },
            "B7": {
              "type": "image/x.geotiff",
              "eo:bands": [
                6
              ],
              "title": "Band 7 (swir22)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B7.TIF"
            },
            "B8": {
              "type": "image/x.geotiff",
              "eo:bands": [
                7
              ],
              "title": "Band 8 (pan)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B8.TIF"
            },
            "B9": {
              "type": "image/x.geotiff",
              "eo:bands": [
                8
              ],
              "title": "Band 9 (cirrus)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B9.TIF"
            },
            "B10": {
              "type": "image/x.geotiff",
              "eo:bands": [
                9
              ],
              "title": "Band 10 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B10.TIF"
            },
            "B11": {
              "type": "image/x.geotiff",
              "eo:bands": [
                10
              ],
              "title": "Band 11 (lwir)",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_B11.TIF"
            },
            "ANG": {
              "title": "Angle coefficients file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_ANG.txt"
            },
            "MTL": {
              "title": "original metadata file",
              "type": "text/plain",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_MTL.txt"
            },
            "BQA": {
              "title": "Band quality data",
              "type": "image/x.geotiff",
              "href": "https://landsat-pds.s3.amazonaws.com/c1/L8/179/049/LC08_L1TP_179049_20190910_20190917_01_T1/LC08_L1TP_179049_20190910_20190917_01_T1_BQA.TIF"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/landsat-8-l1/items/LC81790492019253"
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
      ]
    },
    "sentinel-2-l1c": {
      "features": [
        {
          "type": "Feature",
          "id": "S2B_33SWC_20190910_0",
          "bbox": [
            14.999781044224273,
            37.85618438205922,
            16.21456277065522,
            38.84898947181679
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  15.877080016313613,
                  37.85618438205922
                ],
                [
                  14.999784004087461,
                  37.85945097203489
                ],
                [
                  14.999781044224273,
                  38.84898947181679
                ],
                [
                  16.21456277065522,
                  38.84267462359775
                ],
                [
                  15.877080016313613,
                  37.85618438205922
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
            "datetime": "2019-09-10T10:00:02.574000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 30.13,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "S",
            "sentinel:grid_square": "WC",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33SWC_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WC/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WC/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WC/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WC/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33SWC_20190910_0"
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
          "id": "S2B_33SXC_20190910_0",
          "bbox": [
            16.150593638902283,
            38.65845492212704,
            16.214563961922376,
            38.84329410998903
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.150593638902283,
                  38.65845492212704
                ],
                [
                  16.153453975459126,
                  38.84329410998903
                ],
                [
                  16.214563961922376,
                  38.84267461120965
                ],
                [
                  16.150593638902283,
                  38.65845492212704
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
            "datetime": "2019-09-10T09:59:52.893000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 49.81,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "S",
            "sentinel:grid_square": "XC",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33SXC_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XC/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XC/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XC/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XC/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33SXC_20190910_0"
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
          "id": "S2B_33SWD_20190910_0",
          "bbox": [
            14.999778218370487,
            38.7548744668534,
            16.28126851320822,
            39.7502589163948
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.18419482992294,
                  38.7548744668534
                ],
                [
                  14.99978131374438,
                  38.76087346847721
                ],
                [
                  14.999778218370487,
                  39.7502589163948
                ],
                [
                  16.28126851320822,
                  39.74318731254915
                ],
                [
                  16.267765139266366,
                  39.00057593550751
                ],
                [
                  16.24703621179129,
                  38.936094281813276
                ],
                [
                  16.18419482992294,
                  38.7548744668534
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
            "datetime": "2019-09-10T09:59:48.323000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 50.56,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "S",
            "sentinel:grid_square": "WD",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33SWD_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WD/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WD/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/WD/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/WD/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33SWD_20190910_0"
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
          "id": "S2B_33SXD_20190910_0",
          "bbox": [
            16.150883870881906,
            38.75487444906889,
            16.528115327073785,
            39.74439077038703
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.18419658515439,
                  38.75487444906889
                ],
                [
                  16.150883870881906,
                  38.75520723472507
                ],
                [
                  16.16716947282098,
                  39.74439077038703
                ],
                [
                  16.528115327073785,
                  39.74019976929493
                ],
                [
                  16.18419658515439,
                  38.75487444906889
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
            "datetime": "2019-09-10T09:59:42.919000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 80.22,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "S",
            "sentinel:grid_square": "XD",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33SXD_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XD/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XD/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/S/XD/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/S/XD/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33SXD_20190910_0"
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
          "id": "S2B_33TWE_20190910_0",
          "bbox": [
            14.999775264333282,
            39.65456644304081,
            16.298328663178285,
            40.650847506566784
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.27963059106329,
                  39.65456644304081
                ],
                [
                  14.999778501981563,
                  39.66161596790567
                ],
                [
                  14.999775264333282,
                  40.650847506566784
                ],
                [
                  16.298328663178285,
                  40.64354834012355
                ],
                [
                  16.27963059106329,
                  39.65456644304081
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
            "datetime": "2019-09-10T09:59:34.153000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 74.96,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "WE",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TWE_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WE/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WE/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WE/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WE/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TWE_20190910_0"
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
          "id": "S2B_33TXE_20190910_0",
          "bbox": [
            16.165677325802505,
            39.6519657955248,
            16.848118332176362,
            40.64479052153661
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.497156996253665,
                  39.6519657955248
                ],
                [
                  16.165677325802505,
                  39.65576614375439
                ],
                [
                  16.18271128824437,
                  40.64479052153661
                ],
                [
                  16.848118332176362,
                  40.63605664649598
                ],
                [
                  16.497156996253665,
                  39.6519657955248
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
            "datetime": "2019-09-10T09:59:30.207000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 76.22,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "XE",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TXE_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XE/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XE/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XE/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XE/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TXE_20190910_0"
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
          "id": "S2B_33TWF_20190910_0",
          "bbox": [
            14.999772171826372,
            40.555482279926174,
            16.316188256367813,
            41.55183566226867
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.296625711572222,
                  40.555482279926174
                ],
                [
                  14.999775559208345,
                  40.56275892201299
                ],
                [
                  14.999772171826372,
                  41.55183566226867
                ],
                [
                  16.316188256367813,
                  41.5443026672023
                ],
                [
                  16.296625711572222,
                  40.555482279926174
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
            "datetime": "2019-09-10T09:59:19.656000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 54.42,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "WF",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TWF_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WF/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WF/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WF/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WF/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TWF_20190910_0"
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
          "id": "S2B_33TXF_20190910_0",
          "bbox": [
            16.181159895858748,
            40.5484721225152,
            17.17615037648367,
            41.54558463811687
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.816781428314055,
                  40.5484721225152
                ],
                [
                  16.181159895858748,
                  40.55672062845843
                ],
                [
                  16.19898143556844,
                  41.54558463811687
                ],
                [
                  17.17615037648367,
                  41.531240535935545
                ],
                [
                  16.816781428314055,
                  40.5484721225152
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
            "datetime": "2019-09-10T09:59:15.788000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 85.08,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "XF",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TXF_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XF/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XF/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XF/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XF/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TXF_20190910_0"
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
          "id": "S2B_33TWG_20190910_0",
          "bbox": [
            14.999768935314851,
            41.45625103906916,
            16.334879219209856,
            42.45268219276705
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  16.31440633099948,
                  41.45625103906916
                ],
                [
                  14.999772480380537,
                  41.463760894243656
                ],
                [
                  14.999768935314851,
                  42.45268219276705
                ],
                [
                  16.334879219209856,
                  42.44490886194977
                ],
                [
                  16.31440633099948,
                  41.45625103906916
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
            "datetime": "2019-09-10T09:59:05.354000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 64.85,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "WG",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TWG_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WG/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WG/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/WG/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/WG/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TWG_20190910_0"
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
          "id": "S2B_33TXG_20190910_0",
          "bbox": [
            16.197358094006223,
            41.4437812911678,
            17.51178427557763,
            42.446231729279084
          ],
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  17.143784730735423,
                  41.4437812911678
                ],
                [
                  16.197358094006223,
                  41.4575290723945
                ],
                [
                  16.21600900581534,
                  42.446231729279084
                ],
                [
                  17.51178427557763,
                  42.425154143031065
                ],
                [
                  17.143784730735423,
                  41.4437812911678
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
            "datetime": "2019-09-10T09:59:01.204000+00:00",
            "eo:platform": "sentinel-2b",
            "eo:cloud_cover": 57.61,
            "sentinel:utm_zone": 33,
            "sentinel:latitude_band": "T",
            "sentinel:grid_square": "XG",
            "sentinel:sequence": "0",
            "sentinel:product_id": "S2B_MSIL1C_20190910T095029_N0208_R079_T33TXG_20190910T120214"
          },
          "assets": {
            "thumbnail": {
              "title": "Thumbnail",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XG/2019/9/10/0/preview.jpg"
            },
            "info": {
              "title": "Basic JSON metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XG/2019/9/10/0/tileInfo.json"
            },
            "metadata": {
              "title": "Complete XML metadata",
              "href": "https://roda.sentinel-hub.com/sentinel-s2-l1c/tiles/33/T/XG/2019/9/10/0/metadata.xml"
            },
            "tki": {
              "title": "True color image",
              "type": "image/jp2",
              "eo:bands": [
                3,
                2,
                1
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/TKI.jp2"
            },
            "B01": {
              "title": "Band 1 (coastal)",
              "type": "image/jp2",
              "eo:bands": [
                0
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B01.jp2"
            },
            "B02": {
              "title": "Band 2 (blue)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B02.jp2"
            },
            "B03": {
              "title": "Band 3 (green)",
              "type": "image/jp2",
              "eo:bands": [
                2
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B03.jp2"
            },
            "B04": {
              "title": "Band 4 (red)",
              "type": "image/jp2",
              "eo:bands": [
                3
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B04.jp2"
            },
            "B05": {
              "title": "Band 5",
              "type": "image/jp2",
              "eo:bands": [
                4
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B05.jp2"
            },
            "B06": {
              "title": "Band 6",
              "type": "image/jp2",
              "eo:bands": [
                5
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B06.jp2"
            },
            "B07": {
              "title": "Band 7",
              "type": "image/jp2",
              "eo:bands": [
                6
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B07.jp2"
            },
            "B08": {
              "title": "Band 8 (nir)",
              "type": "image/jp2",
              "eo:bands": [
                7
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B08.jp2"
            },
            "B8A": {
              "title": "Band 8A",
              "type": "image/jp2",
              "eo:bands": [
                8
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B08.jp2"
            },
            "B09": {
              "title": "Band 9",
              "type": "image/jp2",
              "eo:bands": [
                9
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B09.jp2"
            },
            "B10": {
              "title": "Band 10 (cirrus)",
              "type": "image/jp2",
              "eo:bands": [
                10
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B10.jp2"
            },
            "B11": {
              "title": "Band 11 (swir16)",
              "type": "image/jp2",
              "eo:bands": [
                11
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B11.jp2"
            },
            "B12": {
              "title": "Band 12 (swir22)",
              "type": "image/jp2",
              "eo:bands": [
                12
              ],
              "href": "https://sentinel-s2-l1c.s3.amazonaws.com/tiles/33/T/XG/2019/9/10/0/B11.jp2"
            }
          },
          "links": [
            {
              "rel": "self",
              "href": "https://sat-api.developmentseed.org/collections/sentinel-2-l1c/items/S2B_33TXG_20190910_0"
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
      ]
    }
  },
  "kepler_stac": {
    "cbers4mux": {
      "features": [
        {
          "id": "CBERS_4_MUX_20190905_083_084_L4",
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    30.285026,
                    13.894313
                  ],
                  [
                    31.388157,
                    13.723681
                  ],
                  [
                    31.634944,
                    14.785162
                  ],
                  [
                    30.526705,
                    14.956548
                  ],
                  [
                    30.285026,
                    13.894313
                  ]
                ]
              ]
            ]
          },
          "bbox": [
            30.284656,
            13.704901,
            31.637122,
            14.987552
          ],
          "collection": "CBERS4MUX",
          "properties": {
            "datetime": "2019-09-05T08:14:43Z",
            "eo:sun_azimuth": 104.468,
            "eo:sun_elevation": 64.7035,
            "eo:off_nadir": -0.00829945,
            "eo:epsg": 32633,
            "eo:instrument": "MUX",
            "cbers:data_type": "L4",
            "cbers:path": 83,
            "cbers:row": 84
          },
          "links": [
            {
              "rel": "self",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4.json"
            },
            {
              "rel": "parent",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/083/084/catalog.json"
            },
            {
              "rel": "collection",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/MUX/collection.json"
            }
          ],
          "assets": {
            "thumbnail": {
              "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084.jpg",
              "type": "image/jpeg"
            },
            "metadata": {
              "href": "s3://cbers-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084_L4_BAND6.xml",
              "title": "INPE original metadata",
              "type": "text/xml"
            },
            "B5": {
              "href": "s3://cbers-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084_L4_BAND5.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                0
              ]
            },
            "B6": {
              "href": "s3://cbers-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084_L4_BAND6.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                1
              ]
            },
            "B7": {
              "href": "s3://cbers-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084_L4_BAND7.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                2
              ]
            },
            "B8": {
              "href": "s3://cbers-pds/CBERS4/MUX/083/084/CBERS_4_MUX_20190905_083_084_L4/CBERS_4_MUX_20190905_083_084_L4_BAND8.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                3
              ]
            }
          }
        }
      ]
    },
    "cbers4awfi": {
      "features": [
        {
          "id": "CBERS_4_AWFI_20190903_075_087_L4",
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    33.339157,
                    8.94124
                  ],
                  [
                    41.288007,
                    7.704847
                  ],
                  [
                    42.92097,
                    14.469573
                  ],
                  [
                    34.777676,
                    15.734493
                  ],
                  [
                    33.339157,
                    8.94124
                  ]
                ]
              ]
            ]
          },
          "bbox": [
            33.352991,
            7.63751,
            42.957276,
            15.81771
          ],
          "collection": "CBERS4AWFI",
          "properties": {
            "datetime": "2019-09-03T07:44:30Z",
            "eo:sun_azimuth": 98.4154,
            "eo:sun_elevation": 65.3492,
            "eo:off_nadir": -0.00866205,
            "eo:epsg": 32639,
            "eo:instrument": "AWFI",
            "cbers:data_type": "L4",
            "cbers:path": 75,
            "cbers:row": 87
          },
          "links": [
            {
              "rel": "self",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4.json"
            },
            {
              "rel": "parent",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/075/087/catalog.json"
            },
            {
              "rel": "collection",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
            }
          ],
          "assets": {
            "thumbnail": {
              "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087.jpg",
              "type": "image/jpeg"
            },
            "metadata": {
              "href": "s3://cbers-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087_L4_BAND14.xml",
              "title": "INPE original metadata",
              "type": "text/xml"
            },
            "B13": {
              "href": "s3://cbers-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087_L4_BAND13.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                0
              ]
            },
            "B14": {
              "href": "s3://cbers-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087_L4_BAND14.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                1
              ]
            },
            "B15": {
              "href": "s3://cbers-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087_L4_BAND15.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                2
              ]
            },
            "B16": {
              "href": "s3://cbers-pds/CBERS4/AWFI/075/087/CBERS_4_AWFI_20190903_075_087_L4/CBERS_4_AWFI_20190903_075_087_L4_BAND16.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                3
              ]
            }
          }
        },
        {
          "id": "CBERS_4_AWFI_20190908_082_087_L4",
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    26.590074,
                    8.941495
                  ],
                  [
                    34.538007,
                    7.705317
                  ],
                  [
                    36.16961,
                    14.471115
                  ],
                  [
                    28.030385,
                    15.735301
                  ],
                  [
                    26.590074,
                    8.941495
                  ]
                ]
              ]
            ]
          },
          "bbox": [
            26.606886,
            7.625357,
            36.200605,
            15.847539
          ],
          "collection": "CBERS4AWFI",
          "properties": {
            "datetime": "2019-09-08T08:11:43Z",
            "eo:sun_azimuth": 103.01,
            "eo:sun_elevation": 65.3458,
            "eo:off_nadir": -0.00820021,
            "eo:epsg": 32633,
            "eo:instrument": "AWFI",
            "cbers:data_type": "L4",
            "cbers:path": 82,
            "cbers:row": 87
          },
          "links": [
            {
              "rel": "self",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4.json"
            },
            {
              "rel": "parent",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/082/087/catalog.json"
            },
            {
              "rel": "collection",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/AWFI/collection.json"
            }
          ],
          "assets": {
            "thumbnail": {
              "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087.jpg",
              "type": "image/jpeg"
            },
            "metadata": {
              "href": "s3://cbers-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087_L4_BAND14.xml",
              "title": "INPE original metadata",
              "type": "text/xml"
            },
            "B13": {
              "href": "s3://cbers-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087_L4_BAND13.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                0
              ]
            },
            "B14": {
              "href": "s3://cbers-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087_L4_BAND14.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                1
              ]
            },
            "B15": {
              "href": "s3://cbers-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087_L4_BAND15.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                2
              ]
            },
            "B16": {
              "href": "s3://cbers-pds/CBERS4/AWFI/082/087/CBERS_4_AWFI_20190908_082_087_L4/CBERS_4_AWFI_20190908_082_087_L4_BAND16.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                3
              ]
            }
          }
        }
      ]
    },
    "cbers4pan10m": {
      "features": [
        {
          "id": "CBERS_4_PAN10M_20190905_083_084_L2",
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    30.836166,
                    13.896311
                  ],
                  [
                    31.381123,
                    13.81242
                  ],
                  [
                    31.629542,
                    14.880699
                  ],
                  [
                    31.082044,
                    14.965014
                  ],
                  [
                    30.836166,
                    13.896311
                  ]
                ]
              ]
            ]
          },
          "bbox": [
            30.836868,
            13.808216,
            31.629056,
            14.969155
          ],
          "collection": "CBERS4PAN10M",
          "properties": {
            "datetime": "2019-09-05T08:14:43Z",
            "eo:sun_azimuth": 104.69,
            "eo:sun_elevation": 64.9599,
            "eo:off_nadir": -0.00829945,
            "eo:epsg": 32633,
            "eo:instrument": "PAN10M",
            "cbers:data_type": "L2",
            "cbers:path": 83,
            "cbers:row": 84
          },
          "links": [
            {
              "rel": "self",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2.json"
            },
            {
              "rel": "parent",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/083/084/catalog.json"
            },
            {
              "rel": "collection",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN10M/collection.json"
            }
          ],
          "assets": {
            "thumbnail": {
              "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2/CBERS_4_PAN10M_20190905_083_084.jpg",
              "type": "image/jpeg"
            },
            "metadata": {
              "href": "s3://cbers-pds/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2/CBERS_4_PAN10M_20190905_083_084_L2_BAND4.xml",
              "title": "INPE original metadata",
              "type": "text/xml"
            },
            "B2": {
              "href": "s3://cbers-pds/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2/CBERS_4_PAN10M_20190905_083_084_L2_BAND2.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                0
              ]
            },
            "B3": {
              "href": "s3://cbers-pds/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2/CBERS_4_PAN10M_20190905_083_084_L2_BAND3.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                1
              ]
            },
            "B4": {
              "href": "s3://cbers-pds/CBERS4/PAN10M/083/084/CBERS_4_PAN10M_20190905_083_084_L2/CBERS_4_PAN10M_20190905_083_084_L2_BAND4.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                2
              ]
            }
          }
        }
      ]
    },
    "cbers4pan5m": {
      "features": [
        {
          "id": "CBERS_4_PAN5M_20190905_083_084_L2",
          "type": "Feature",
          "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
              [
                [
                  [
                    30.844747,
                    13.898112
                  ],
                  [
                    31.389626,
                    13.814269
                  ],
                  [
                    31.63789,
                    14.881875
                  ],
                  [
                    31.090472,
                    14.966142
                  ],
                  [
                    30.844747,
                    13.898112
                  ]
                ]
              ]
            ]
          },
          "bbox": [
            30.845543,
            13.810054,
            31.637372,
            14.970108
          ],
          "collection": "CBERS4PAN5M",
          "properties": {
            "datetime": "2019-09-05T08:14:41Z",
            "eo:sun_azimuth": 104.693,
            "eo:sun_elevation": 64.9596,
            "eo:off_nadir": -0.00829945,
            "eo:epsg": 32633,
            "eo:instrument": "PAN5M",
            "cbers:data_type": "L2",
            "cbers:path": 83,
            "cbers:row": 84
          },
          "links": [
            {
              "rel": "self",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/083/084/CBERS_4_PAN5M_20190905_083_084_L2.json"
            },
            {
              "rel": "parent",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/083/084/catalog.json"
            },
            {
              "rel": "collection",
              "href": "https://cbers-stac-0-7.s3.amazonaws.com/CBERS4/PAN5M/collection.json"
            }
          ],
          "assets": {
            "thumbnail": {
              "href": "https://s3.amazonaws.com/cbers-meta-pds/CBERS4/PAN5M/083/084/CBERS_4_PAN5M_20190905_083_084_L2/CBERS_4_PAN5M_20190905_083_084.jpg",
              "type": "image/jpeg"
            },
            "metadata": {
              "href": "s3://cbers-pds/CBERS4/PAN5M/083/084/CBERS_4_PAN5M_20190905_083_084_L2/CBERS_4_PAN5M_20190905_083_084_L2_BAND1.xml",
              "title": "INPE original metadata",
              "type": "text/xml"
            },
            "B1": {
              "href": "s3://cbers-pds/CBERS4/PAN5M/083/084/CBERS_4_PAN5M_20190905_083_084_L2/CBERS_4_PAN5M_20190905_083_084_L2_BAND1.tif",
              "type": "image/vnd.stac.geotiff; cloud-optimized=true",
              "eo:bands": [
                0
              ]
            }
          }
        }
      ]
    }
  },
  "type": "[Explore Component] Features Separate by Providers"
}
