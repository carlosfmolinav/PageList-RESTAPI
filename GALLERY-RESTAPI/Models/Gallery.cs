﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GALLERY_RESTAPI.Models
{
    public class Gallery
    {
        public int albumId { get; set; }
        public int id { get; set; }
        public string title { get; set; }
        public string url { get; set; }
        public string thumbnailUrl { get; set; }
    }
}