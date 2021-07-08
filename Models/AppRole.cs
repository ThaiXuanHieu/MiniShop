using System;
using Microsoft.AspNetCore.Identity;

namespace MiniShop.Models
{
    public class AppRole : IdentityRole<Guid>
    {
        public string Description { get; set; }
    }
}