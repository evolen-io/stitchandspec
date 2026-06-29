export type Merchant = {
  id: string;
  name: string;
  niche: 'sewing-embroidery';
  network: string;
  commission: string;
  cookie: string;
  accessibility: 'confirmed' | 'probable' | 'wait-until-traffic';
  applyUrl: string;
  notes: string;
};

export const merchants: Merchant[] = [
  {
    id: 'sewing-machines-plus',
    name: 'Sewing Machines Plus',
    niche: 'sewing-embroidery',
    network: 'Awin',
    commission: '10% standard; coupon sites 4%',
    cookie: 'Not shown on public merchant page; verify inside network before final link placement',
    accessibility: 'confirmed',
    applyUrl: 'https://sewingmachinesplus.com/pages/smp-affiliate',
    notes: 'Approved affiliate merchant. Official page states quick application, 10% commission, $441.67 AOV.'
  },
  {
    id: 'brother-usa',
    name: 'Brother USA',
    niche: 'sewing-embroidery',
    network: 'Impact, advertiser ID 10836',
    commission: '5% baseline CPA; negotiable case-by-case',
    cookie: 'Need to confirm inside Impact contract terms',
    accessibility: 'confirmed',
    applyUrl: 'https://www.brother-usa.com/become-an-affiliate',
    notes: 'Official Brother page explicitly invites websites/apps and says tracking/payment via Impact Radius.'
  },
  {
    id: 'quality-sewing',
    name: 'Quality Sewing & Vacuum',
    niche: 'sewing-embroidery',
    network: 'In-house affiliate dashboard/application',
    commission: 'Up to 8–12%',
    cookie: 'Not public',
    accessibility: 'probable',
    applyUrl: 'https://www.qualitysewing.com/pages/affiliate',
    notes: 'Official page says 5–7 business day review and asks for details/social presence; strong after 10–15 pages live.'
  },
  {
    id: 'singer-svp',
    name: 'SINGER / SVP Sewing Brands',
    niche: 'sewing-embroidery',
    network: 'FlexOffers path observed; official creator/affiliate pages exist',
    commission: 'Competitive/generous; exact rate not public on official page',
    cookie: '30 days via FlexOffers listing',
    accessibility: 'probable',
    applyUrl: 'https://www.singer.com/pages/affiliate-creators',
    notes: 'Covers SINGER, PFAFF, Husqvarna Viking; likely good brand-depth backup once site is credible.'
  },
  {
    id: 'baby-lock',
    name: 'Baby Lock',
    niche: 'sewing-embroidery',
    network: 'Awin/Sovrn paths observed',
    commission: '5% via Yazing/Sovrn-style references; verify in network',
    cookie: 'Not public in accessible page',
    accessibility: 'probable',
    applyUrl: 'https://babylock.com/affiliate',
    notes: 'Official affiliate URL exists but public page resolves like a category page; use network application when available.'
  }
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  merchantIds: string[];
  affiliateUrlByMerchant: Record<string, string>;
  status: 'placeholder' | 'approved' | 'active';
  facts: Record<string, string>;
};

export const products: Product[] = [
  {
    slug: 'brother-se700',
    name: 'Brother SE700',
    category: 'beginner embroidery combo',
    merchantIds: ['brother-usa', 'sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fse700'
    },
    status: 'active',
    facts: { model: 'SE700', hoop: '4 x 4 in', type: 'sewing and embroidery combo', audience: 'beginner embroidery' }
  },
  {
    slug: 'brother-se2000',
    name: 'Brother SE2000',
    category: 'large-screen embroidery combo',
    merchantIds: ['brother-usa', 'sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fse2000'
    },
    status: 'active',
    facts: { model: 'SE2000', hoop: '5 x 7 in', type: 'sewing and embroidery combo', audience: 'intermediate embroidery' }
  },
  {
    slug: 'singer-heavy-duty-4452',
    name: 'SINGER Heavy Duty 4452',
    category: 'mechanical heavy-duty sewing',
    merchantIds: ['singer-svp', 'sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2F4452'
    },
    status: 'active',
    facts: { model: '4452', type: 'mechanical sewing', audience: 'denim, canvas, utility sewing' }
  },
  {
    slug: 'brother-cs7000x',
    name: 'Brother CS7000X',
    category: 'computerized sewing and quilting',
    merchantIds: ['brother-usa', 'sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fcs7000x'
    },
    status: 'active',
    facts: { model: 'CS7000X', stitches: '70', type: 'computerized sewing and quilting', audience: 'sewing, quilting, alterations' }
  },
  {
    slug: 'brother-pq1600s',
    name: 'Brother PQ1600S',
    category: 'straight-stitch sewing and quilting',
    merchantIds: ['brother-usa', 'sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fpq1600s'
    },
    status: 'active',
    facts: { model: 'PQ1600S', speed: '1500 SPM', type: 'straight-stitch sewing and quilting', audience: 'quilting and high-speed straight stitch' }
  },
  {
    slug: 'brother-st150hdh',
    name: 'Brother ST150HDH',
    category: 'heavy-duty computerized sewing',
    merchantIds: ['brother-usa', 'sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fst150hdh'
    },
    status: 'active',
    facts: { model: 'ST150HDH', type: 'computerized sewing', audience: 'heavy-duty sewing' }
  },
  {
    slug: 'singer-heavy-duty-6800c',
    name: 'SINGER Heavy Duty 6800C',
    category: 'computerized heavy-duty sewing',
    merchantIds: ['singer-svp', 'sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2F230256112'
    },
    status: 'active',
    facts: { model: '6800C', type: 'computerized sewing', audience: 'heavy-duty sewing' }
  },
  {
    slug: 'juki-tl-2010q',
    name: 'JUKI TL-2010Q',
    category: 'straight-stitch sewing and quilting',
    merchantIds: ['sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fjuki-2010q-machine'
    },
    status: 'active',
    facts: { model: 'TL-2010Q', type: 'straight-stitch sewing and quilting', audience: 'quilting and semi-professional sewing' }
  },
  {
    slug: 'janome-hd3000',
    name: 'Janome HD3000',
    category: 'mechanical heavy-duty sewing',
    merchantIds: ['sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fjanome-hd3000'
    },
    status: 'active',
    facts: { model: 'HD3000', type: 'mechanical sewing', audience: 'heavy-duty sewing' }
  },
  {
    slug: 'janome-sewist-780dc',
    name: 'Janome Sewist 780DC',
    category: 'computerized sewing',
    merchantIds: ['sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fjanome-780dc'
    },
    status: 'active',
    facts: { model: '780DC', type: 'computerized sewing', audience: 'sewing and alterations' }
  },
  {
    slug: 'janome-quilt-maker-pro-18-versa',
    name: 'Janome Quilt Maker Pro 18 Versa',
    category: 'longarm quilting',
    merchantIds: ['sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fquilt-maker-pro-18-versa'
    },
    status: 'active',
    facts: { model: 'Quilt Maker Pro 18 Versa', throat: '18 in', type: 'longarm quilting', audience: 'longarm quilting' }
  },
  {
    slug: 'handi-quilter-amara-20',
    name: 'Handi Quilter Amara 20',
    category: 'longarm quilting',
    merchantIds: ['sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fhq-amara'
    },
    status: 'active',
    facts: { model: 'Amara 20', throat: '20 in', type: 'longarm quilting', audience: 'longarm quilting' }
  },
  {
    slug: 'handi-quilter-moxie',
    name: 'Handi Quilter Moxie',
    category: 'longarm quilting',
    merchantIds: ['sewing-machines-plus'],
    affiliateUrlByMerchant: {
      'sewing-machines-plus': 'https://www.awin1.com/cread.php?awinmid=85561&awinaffid=2957637&ued=https%3A%2F%2Fsewingmachinesplus.com%2Fproducts%2Fhq-moxie'
    },
    status: 'active',
    facts: { model: 'Moxie', throat: '15 in', type: 'longarm quilting', audience: 'longarm quilting' }
  }
];
