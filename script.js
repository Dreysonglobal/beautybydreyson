const STORE = {
  name: "Acavien Nig Ltd",
  address: "Suite 2, Polaris Bank Plaza, Opposite Carpark, BBA, Trade Fair Complex",
  phone: "08142526229",
  whatsapp: "2348142526229",
  email: "acaviennigltd@gmail.com"
};
const products =[
    {
        "id":  1,
        "name":  "Nourish+ Restore Ceramide Serum",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/facefact.webp"
    },
    {
        "id":  2,
        "name":  "Facefacts vitamin c lip balm",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Face facts vitamin c lip balm.jpg"
    },
    {
        "id":  3,
        "name":  "Facefacts collagen lip balm",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Face facts collagen lip balm.jpg"
    },
    {
        "id":  4,
        "name":  "Facefacts lip silk",
        "brand":  "Facefacts",
        "price":  2500,
        "image":  "images/Face facts lip silk.jpg"
    },
    {
        "id":  5,
        "name":  "Facefacts aura lip oil",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/Face facts aura lip oil.jpg"
    },
    {
        "id":  6,
        "name":  "Facefacts lip treatment",
        "brand":  "Facefacts",
        "price":  2500,
        "image":  "images/Face facts lip treatment.jpg"
    },
    {
        "id":  7,
        "name":  "Facefacts snail mucin cleanser",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts snail mucin cleanser.jpg"
    },
    {
        "id":  8,
        "name":  "Facefacts snail mucin serum",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts snail mucin serum.jpg"
    },
    {
        "id":  9,
        "name":  "Facefacts snail mucin 4 in 1 gel cream",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts snail mucin 4 in 1 gel cream.jpg"
    },
    {
        "id":  10,
        "name":  "Facefacts snail mucin sheet mask",
        "brand":  "Facefacts",
        "price":  3500,
        "image":  "images/Face facts snail mucin sheet mask.jpg"
    },
    {
        "id":  11,
        "name":  "Face facts rice oil cleanser",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts rice oil cleanser.jpg"
    },
    {
        "id":  12,
        "name":  "Face facts rice milk toner",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts rice milk toner.jpg"
    },
    {
        "id":  13,
        "name":  "Face facts daily rich rice cream",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts daily rich rice cream.jpg"
    },
    {
        "id":  14,
        "name":  "Face facts rice clay mask",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts rice clay mask.jpg"
    },
    {
        "id":  15,
        "name":  "Face facts balancing rice serum",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts balancing rice serum.jpg"
    },
    {
        "id":  16,
        "name":  "Face facts BHA toner",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/Face facts BHA toner.jpg"
    },
    {
        "id":  17,
        "name":  "Simple refreshing wash",
        "brand":  "Simple",
        "price":  4000,
        "image":  "images/Simple refreshing wash.jpg"
    },
    {
        "id":  18,
        "name":  "Simple moisturising wash",
        "brand":  "Simple",
        "price":  4000,
        "image":  "images/Simple moisturising wash.jpg"
    },
    {
        "id":  19,
        "name":  "Simple purifying gel wash",
        "brand":  "Simple",
        "price":  4500,
        "image":  "images/Simple purifying gel wash.jpg"
    },
    {
        "id":  20,
        "name":  "Simple age resisting wash",
        "brand":  "Simple",
        "price":  4500,
        "image":  "images/Simple age resisting wash.jpg"
    },
    {
        "id":  21,
        "name":  "Simple Micellar gel wash",
        "brand":  "Simple",
        "price":  4500,
        "image":  "images/Simple Micellar gel wash.jpg"
    },
    {
        "id":  22,
        "name":  "Simple purifying cleansing lotion",
        "brand":  "Simple",
        "price":  4500,
        "image":  "images/Simple purifying cleansing lotion.jpg"
    },
    {
        "id":  23,
        "name":  "Tiam Vitamin B3 Source Serum",
        "brand":  "Korean Skincare",
        "price":  9500,
        "image":  "images/TIAM VITAMIN B3 SOURCE SERUM.jpg"
    },
    {
        "id":  24,
        "name":  "Tiam Vitamin B3 Mist Toner",
        "brand":  "Korean Skincare",
        "price":  9500,
        "image":  "images/TIAM VITAMIN B3 MIST TONER.jpg"
    },
    {
        "id":  25,
        "name":  "Tiam Low PH Cleanser",
        "brand":  "Korean Skincare",
        "price":  9500,
        "image":  "images/TIAM LOW PH CLEANSER.jpg"
    },
    {
        "id":  26,
        "name":  "Tiam Alpha 5 Mela Care Cream",
        "brand":  "Korean Skincare",
        "price":  9500,
        "image":  "images/TIAM ALPHA 5 MELA CARE CREAM.jpg"
    },
    {
        "id":  27,
        "name":  "COSRX Low PH Gel",
        "brand":  "Korean Skincare",
        "price":  9500,
        "image":  "images/COSRX LOW PH GEL.jpg"
    },
    {
        "id":  28,
        "name":  "ANUA Niacinamide And TXA Serum",
        "brand":  "Korean Skincare",
        "price":  18000,
        "image":  "images/ANUA NIACINAMIDE AND TXA SERUM.jpg"
    },
    {
        "id":  29,
        "name":  "ANUA Azelac Acid Serum",
        "brand":  "Korean Skincare",
        "price":  18000,
        "image":  "images/ANUA AZELAC ACID SERUM.jpg"
    },
    {
        "id":  30,
        "name":  "ANUA Heartleaf Silky Moisture Sun Cream",
        "brand":  "Korean Skincare",
        "price":  16000,
        "image":  "images/ANUA HEARTLEAF SILKY MOISTURE SUN CREAM.jpg"
    },
    {
        "id":  31,
        "name":  "ANUA Zero Cast Moisturising Finish Sunscreen",
        "brand":  "Korean Skincare",
        "price":  14500,
        "image":  "images/ANUA ZERO CAST MOISTURISING FINISH SUNSCREEN.jpg"
    },
    {
        "id":  32,
        "name":  "ANUA 7 Rice Ceramide Serum",
        "brand":  "Korean Skincare",
        "price":  18000,
        "image":  "images/ANUA 7 RICE CERAMIDE SERUM.jpg"
    },
    {
        "id":  33,
        "name":  "COSRX Advance Snail 96 Mucin Essence",
        "brand":  "Korean Skincare",
        "price":  13500,
        "image":  "images/COSRX ADVANCE SNAIL 96 ESSENCE MUCIN.jpg"
    },
    {
        "id":  34,
        "name":  "COSRX Salicylic Gentle Cleanser",
        "brand":  "Korean Skincare",
        "price":  8000,
        "image":  "images/COSRX SALICYLIC GENTLE CLEANSER .jpg"
    },
    {
        "id":  35,
        "name":  "Facefacts hyaluronic acid lip balm",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Facefacts hyaluronic acid lip balm.jpg"
    },
    {
        "id":  36,
        "name":  "Numbutzin Glutathione Vitamin Concentrated Toner",
        "brand":  "Teeka4",
        "price":  15000,
        "image":  "images/NUMBUZIN GLUTATHIONE VITAMIN CONCENTRATED TONER.jpg"
    },
    {
        "id":  37,
        "name":  "MARY & MAY Glutathione Eye Cream",
        "brand":  "Mary & May",
        "price":  9500,
        "image":  "images/MARY & MAY GLUTATHIONE EYE CREAM.jpg"
    },
    {
        "id":  38,
        "name":  "SKIN AQUA Super Moisture UV Gel SPF50",
        "brand":  "SKIN AQUA",
        "price":  9500,
        "image":  "images/SKIN AQUA SUPER MOISTURE UV GEL SPF50.jpg"
    },
    {
        "id":  39,
        "name":  "ILLIYOON Ceramide Lotion",
        "brand":  "ILLIYOON",
        "price":  18500,
        "image":  "images/ILLIYOON CERAMIDE LOTION.jpg"
    },
    {
        "id":  40,
        "name":  "MISSHA Aqua Sun SPF50+",
        "brand":  "MISSHA",
        "price":  9500,
        "image":  "images/MISSHA AQUA SUN SPF50plus.jpg"
    },
    {
        "id":  41,
        "name":  "Panoxyl Acne Foaming Wash",
        "brand":  "PanOxyl",
        "price":  13000,
        "image":  "images/PANOXYL ACNE FOAMING WASH.jpg"
    },
    {
        "id":  42,
        "name":  "NINELESS Glycolic Acid Serum",
        "brand":  "Korean Beauty",
        "price":  12000,
        "image":  "images/NINELESS GLYCOLIC ACID SERUM.jpg"
    },
    {
        "id":  43,
        "name":  "NINELESS Salicylic Acid Serum",
        "brand":  "Korean Beauty",
        "price":  12000,
        "image":  "images/NINELESS SALICYLIC ACID SERUM.jpg"
    },
    {
        "id":  44,
        "name":  "Lamelin Lavender Pure Hand Cream",
        "brand":  "Lamelin",
        "price":  4000,
        "image":  "images/LAMELIN LAVENDER PURE HAND CREAM.jpg"
    },
    {
        "id":  45,
        "name":  "Facefacts, renew rediance retinol serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/45- Facefacts, renew rediance retinol serum 3000naira.jpg"
    },
    {
        "id":  46,
        "name":  "Facefacts, glow resurface lactic acid",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/46- Facefacts, glow resurface lactic acid 3000naira.jpg"
    },
    {
        "id":  47,
        "name":  "Facefacts, revive refresh hyaluronic acid serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/47- Facefacts, revive refresh hyaluronic acid serum 3000naira.jpg"
    },
    {
        "id":  48,
        "name":  "Facefacts, step 02 superberry radiance serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/48- Facefacts, step 02 superberry radiance serum 3000naira.jpg"
    },
    {
        "id":  49,
        "name":  "Facefacts, ceramide nourishing cleansing balm",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/49- Facefacts, ceramide nourishing cleansing balm 6500naira.jpg"
    },
    {
        "id":  50,
        "name":  "Facefacts, blue blemish patches",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/50- Facefacts, blue blemish patches 2000naira.jpg"
    },
    {
        "id":  51,
        "name":  "Facefacts, pink blemish patches",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/51- Facefacts, pink blemish patches 2000naira.jpg"
    },
    {
        "id":  52,
        "name":  "Facefacts, orange blemish patches",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/52- Facefacts, orange blemish patches 2000naira.jpg"
    },
    {
        "id":  53,
        "name":  "Facefacts, bright clear face cream",
        "brand":  "Facefacts",
        "price":  6800,
        "image":  "images/53- Facefacts, bright clear face cream 6800naira.jpg"
    },
    {
        "id":  54,
        "name":  "Facefacts, vitamin c face cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/54- Facefacts, vitamin c face cream 3000naira.jpg"
    },
    {
        "id":  55,
        "name":  "Facefacts, hyaluronic face cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/55- Facefacts, hyaluronic face cream 3000naira.jpg"
    },
    {
        "id":  56,
        "name":  "Facefacts, collagen day cream with q",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/56- Facefacts, collagen day cream with q10 3000naira.jpg"
    },
    {
        "id":  57,
        "name":  "Facefacts, vitamin rich skin base premier",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/57- Facefacts, vitamin rich skin base premier 6500naira.jpg"
    },
    {
        "id":  58,
        "name":  "Facefacts, step 04 hyaluronic hydra gel cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/58- Facefacts, step 04 hyaluronic hydra gel cream 3000naira.jpg"
    },
    {
        "id":  59,
        "name":  "Facefacts, step 01 superfood gel cleanser",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/59- Facefacts, step 01 superfood gel cleanser 3000naira.jpg"
    },
    {
        "id":  60,
        "name":  "Facefacts, vitamin c eye cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/60- Facefacts, vitamin c eye cream 3000naira.jpg"
    },
    {
        "id":  61,
        "name":  "Facefacts, ceramide oil control hydrating toner",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/61- Facefacts, ceramide oil control hydrating toner 5000naira.jpg"
    },
    {
        "id":  62,
        "name":  "Facefacts, soft sugar lip scrub",
        "brand":  "Facefacts",
        "price":  2500,
        "image":  "images/62- Facefacts, soft sugar lip scrub 2500naira.jpg"
    },
    {
        "id":  63,
        "name":  "Facefacts, soothing facial toner",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/63- Facefacts, soothing facial toner 4500naira.jpg"
    },
    {
        "id":  64,
        "name":  "Facefacts, lip oil protecting grape",
        "brand":  "Facefacts",
        "price":  2800,
        "image":  "images/64- Facefacts, lip oil protecting grape 2800naira.jpg"
    },
    {
        "id":  65,
        "name":  "Facefacts, lip oil smoothing peach",
        "brand":  "Facefacts",
        "price":  2800,
        "image":  "images/65- Facefacts, lip oil smoothing peach 2800naira.jpg"
    },
    {
        "id":  66,
        "name":  "Facefacts, lip oil hydo water melon",
        "brand":  "Facefacts",
        "price":  2800,
        "image":  "images/66- Facefacts, lip oil hydo water melon 2800naira.jpg"
    },
    {
        "id":  67,
        "name":  "Facefacts, collage lip boost",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/67- Facefacts, collage lip boost 4500naira.jpg"
    },
    {
        "id":  68,
        "name":  "Facefacts, body cleanser lactic acid",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/68- Facefacts, body cleanser lactic acid 4500naira.jpg"
    },
    {
        "id":  69,
        "name":  "Facefacts, body cleanser salycic acid",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/69- Facefacts, body cleanser salycic acid 4500naira.jpg"
    },
    {
        "id":  70,
        "name":  "Facefacts, body cleanser glycolic acid",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/70- Facefacts, body cleanser glycolic acid 4500naira.jpg"
    },
    {
        "id":  71,
        "name":  "Facefacts, body oil rhubarb rose",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/71- Facefacts, body oil rhubarb rose 6000naira.jpg"
    },
    {
        "id":  72,
        "name":  "Facefacts, body oil bergamot and pepper",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/72- Facefacts, body oil bergamot and pepper 6000naira.jpg"
    },
    {
        "id":  73,
        "name":  "Facefacts, ceramide moisturizing body lotion",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/74- Facefacts, ceramide moisturizing body lotion 6000naira.jpg"
    },
    {
        "id":  74,
        "name":  "Facefacts, ceramide hydrating body wash",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/75- Facefacts, ceramide hydrating body wash 6000naira.jpg"
    },
    {
        "id":  75,
        "name":  "Facefacts, ceramide moisturing cream",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/76- Facefacts, ceramide moisturing cream 6500naira.jpg"
    },
    {
        "id":  76,
        "name":  "Facefacts, body lotion peach and papaya",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/77- Facefacts, body lotion peach and papaya  6000naira.jpg"
    },
    {
        "id":  77,
        "name":  "Facefacts, body lotion strawberry fizz",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/78- Facefacts, body lotion strawberry fizz 6000naira.jpg"
    },
    {
        "id":  78,
        "name":  "Facefacts, body lotion almond milk",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/79- Facefacts, body lotion almond milk 6000naira.jpg"
    },
    {
        "id":  79,
        "name":  "Facefacts, collagen body lotion with q",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/80- Facefacts, collagen body lotion with q10 6000naira.jpg"
    },
    {
        "id":  80,
        "name":  "Facefacts, hyaluronic body lotion",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/81- Facefacts, hyaluronic body lotion 6000naira.jpg"
    },
    {
        "id":  81,
        "name":  "Facefacts, vitamin c body lotion",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/82- Facefacts, vitamin c body lotion 6000naira.jpg"
    },
    {
        "id":  82,
        "name":  "Facefacts, kojic acid body lotion",
        "brand":  "Facefacts",
        "price":  7000,
        "image":  "images/83- Facefacts, kojic acid body lotion 7000naira.jpg"
    },
    {
        "id":  83,
        "name":  "Facefacts, vitaminc facial mist 100ml",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/84- Facefacts, vitaminc facial mist 100ml 2000naira.jpg"
    },
    {
        "id":  84,
        "name":  "Facefacts, vitamin c jelly cleanser 150ml",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/85- Facefacts, vitamin c jelly cleanser 150ml 3000naira.jpg"
    },
    {
        "id":  85,
        "name":  "Facefacts, clean skin towels",
        "brand":  "Facefacts",
        "price":  7200,
        "image":  "images/86- Facefacts, clean skin towels  7200naira.jpg"
    },
    {
        "id":  86,
        "name":  "Facefacts, blotting paper",
        "brand":  "Facefacts",
        "price":  800,
        "image":  "images/87- Facefacts, blotting paper 800naira.jpg"
    },
    {
        "id":  87,
        "name":  "Facefacts, hydrating sheet masks",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/88- Facefacts, hydrating sheet masks 1500naira.jpg"
    },
    {
        "id":  88,
        "name":  "Facefacts, vitamin c sheet mask",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/89- Facefacts, vitamin c sheet mask 1500naira.jpg"
    },
    {
        "id":  89,
        "name":  "Facefacts, brightening sheet mask",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/90- Facefacts, brightening sheet mask 1500naira.jpg"
    },
    {
        "id":  90,
        "name":  "Facefacts, cleansing cucumber mud mask",
        "brand":  "Facefacts",
        "price":  1300,
        "image":  "images/91- Facefacts, cleansing cucumber mud mask 1300naira.jpg"
    },
    {
        "id":  91,
        "name":  "Facefacts, brightening watermelon peel off mask",
        "brand":  "Facefacts",
        "price":  1300,
        "image":  "images/92- Facefacts, brightening watermelon peel off mask 1300naira.jpg"
    },
    {
        "id":  92,
        "name":  "Facefacts, smoothing honey peel off mask",
        "brand":  "Facefacts",
        "price":  1300,
        "image":  "images/93- Facefacts, smoothing honey peel off mask 1300naira.jpg"
    },
    {
        "id":  93,
        "name":  "Facefacts, energizing orange peel off mask",
        "brand":  "Facefacts",
        "price":  1300,
        "image":  "images/94- Facefacts, energizing orange peel off mask 1300naira.jpg"
    },
    {
        "id":  94,
        "name":  "Facefacts, gel eye patches cucumber",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/95-  Facefacts, gel eye patches cucumber 1500naira.jpg"
    },
    {
        "id":  95,
        "name":  "Facefacts, nose pore strips",
        "brand":  "Facefacts",
        "price":  1400,
        "image":  "images/96- Facefacts, nose pore strips 1400naira.jpg"
    },
    {
        "id":  96,
        "name":  "Facefacts, wrinckle care gel eye patches lavender",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/97- Facefacts, wrinckle care gel eye patches lavender 1500naira.jpg"
    },
    {
        "id":  97,
        "name":  "Facefacts, hydrating gel eye patches",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/98- Facefacts, hydrating gel eye patches 1500naira.jpg"
    },
    {
        "id":  98,
        "name":  "Facefacts, target dark circles, gel eye patches",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/99- Facefacts, target dark circles, gel eye patches 1500naira.jpg"
    },
    {
        "id":  99,
        "name":  "Avien 5.5, the brightner vitamin c body wash",
        "brand":  "Avien 5.5",
        "price":  12500,
        "image":  "images/100- Avien 5.5, the brightner vitamin c body wash 10500naira.jpg"
    },
    {
        "id":  100,
        "name":  "Avien 5.5, the smoother glycolic acid body wash",
        "brand":  "Avien 5.5",
        "price":  12500,
        "image":  "images/101- Avien 5.5, the smoother glycolic acid body wash 10500naira.jpg"
    },
    {
        "id":  101,
        "name":  "Avien 5.5, the glow getter korjic acid body wash",
        "brand":  "Avien 5.5",
        "price":  12500,
        "image":  "images/102- Avien 5.5, the glow getter korjic acid body wash 10500naira.jpg"
    },
    {
        "id":  102,
        "name":  "Avien 5.5, the purifier alpha arbutin niacinamide body wash",
        "brand":  "Avien 5.5",
        "price":  12500,
        "image":  "images/103- Avien 5.5, the purifier alpha arbutin niacinamide body wash 10500naira.jpg"
    },
    {
        "id":  103,
        "name":  "Avien 5.5, the wonder body wash",
        "brand":  "Avien 5.5",
        "price":  12500,
        "image":  "images/104- Avien 5.5, the wonder body wash 10500naira.jpg"
    },
    {
        "id":  104,
        "name":  "Avien 5.5, the perfector salicylic acid body wash",
        "brand":  "Avien 5.5",
        "price":  12500,
        "image":  "images/105- Avien 5.5, the perfector salicylic acid body wash 10500naira.jpg"
    },
    {
        "id":  105,
        "name":  "Avien 5.5, the restorer retinol collagen body wash",
        "brand":  "Avien 5.5",
        "price":  12500,
        "image":  "images/106- Avien 5.5, the restorer retinol collagen body wash 10500naira.jpg"
    },
    {
        "id":  106,
        "name":  "Avien 5.5, the purifier body lotion",
        "brand":  "Avien 5.5",
        "price":  13000,
        "image":  "images/107- Avien 5.5, the purifier body lotion 11000.jpg"
    },
    {
        "id":  107,
        "name":  "Avien 5.5, the glo getter body lotion",
        "brand":  "Avien 5.5",
        "price":  13000,
        "image":  "images/108- Avien 5.5, the glo getter body lotion 11000naira.jpg"
    },
    {
        "id":  108,
        "name":  "Avien 5.5, wonder body lotion",
        "brand":  "Avien 5.5",
        "price":  13000,
        "image":  "images/109- Avien 5.5, wonder body lotion 11000naira.jpg"
    },
    {
        "id":  109,
        "name":  "Avien 5.5, the restorer body lotion",
        "brand":  "Avien 5.5",
        "price":  13000,
        "image":  "images/110- Avien 5.5, the restorer body lotion 11000naira.jpg"
    },
    {
        "id":  110,
        "name":  "Avien 5.5, the brightener vitamin c body lotion",
        "brand":  "Avien 5.5",
        "price":  13000,
        "image":  "images/111- Avien 5.5, the brightener vitamin c body lotion 11000naira.jpg"
    },
    {
        "id":  111,
        "name":  "Avien 5.5, the smoother body lotion",
        "brand":  "Avien 5.5",
        "price":  13000,
        "image":  "images/112- Avien 5.5, the smoother body lotion 11000naira.jpg"
    },
    {
        "id":  112,
        "name":  "Facefacts, blemish patches hydrocolloid material",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/113- Facefacts, blemish patches hydrocolloid material 2000naira.jpg"
    },
    {
        "id":  113,
        "name":  "Facefacts, blemish patches joy pixels",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/114- Facefacts, blemish patches joy pixels 2000naira.jpg"
    },
    {
        "id":  114,
        "name":  "Facefacts, blemish patches strawberries",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/115- Facefacts, blemish patches strawberries 2000naira.jpg"
    },
    {
        "id":  115,
        "name":  "Facefacts, blemish patches glow in the dark",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/116- Facefacts, blemish patches glow in the dark 2000naira.jpg"
    },
    {
        "id":  116,
        "name":  "Vaseline, gluta-hya serum burst uv lotion",
        "brand":  "Vaseline",
        "price":  7500,
        "image":  "images/117- Vaseline, gluta-hya serum burst uv lotion 7500naira.jpg"
    },
    {
        "id":  117,
        "name":  "Vaseline, gluta-hya serum burst  lotion, flawless glow",
        "brand":  "Vaseline",
        "price":  7500,
        "image":  "images/118- Vaseline, gluta-hya serum burst  lotion, flawless glow 7500naira.jpg"
    },
    {
        "id":  118,
        "name":  "Facefacts, boho perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/119- Facefacts, boho perfume 10500naira.jpg"
    },
    {
        "id":  119,
        "name":  "Facefacts, santal perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/120- Facefacts, santal perfume 10500naira.jpg"
    },
    {
        "id":  120,
        "name":  "Facefacts, amber perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/121- Facefacts, amber perfume 10500naira.jpg"
    },
    {
        "id":  121,
        "name":  "Facefacts, floral perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/122- Facefacts, floral perfume 10500naira.jpg"
    },
    {
        "id":  122,
        "name":  "Facefacts, orchid perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/123- Facefacts, orchid perfume 10500naira.jpg"
    },
    {
        "id":  123,
        "name":  "Facefacts, serene perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/124- Facefacts, serene perfume 10500.jpg"
    },
    {
        "id":  124,
        "name":  "Facefacts, ceramide foaming cleanser",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/125- Facefacts, ceramide foaming cleanser 6000naira.jpg"
    },
    {
        "id":  125,
        "name":  "Facefacts, ceramide blemish clarifying foaming cleanser",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/126- Facefacts, ceramide blemish clarifying foaming cleanser 6500naira.jpg"
    },
    {
        "id":  126,
        "name":  "Facefacts, ceramide hydrating gentle cleanser",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/127- Facefacts, ceramide hydrating gentle cleanser 4500naira.jpg"
    },
    {
        "id":  127,
        "name":  "Facefacts, ceramide oil control foaming cleanser",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/128- Facefacts, ceramide oil control foaming cleanser 6500.jpg"
    },
    {
        "id":  128,
        "name":  "Facefacts, tropic serenity, hair and body perfume",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/129- Facefacts, tropic serenity, hair and body perfume 5000naira.jpg"
    },
    {
        "id":  129,
        "name":  "Facefacts, velvet blossom, hair and body perfume",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/130- Facefacts, velvet blossom, hair and body perfume 5000naira.jpg"
    },
    {
        "id":  130,
        "name":  "Facefacts, sweet sunrise, hair and body perfume",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/131- Facefacts, sweet sunrise, hair and body perfume 5000naira.jpg"
    },
    {
        "id":  131,
        "name":  "Facefacts, twilight oud hair and body perfume",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/132- Facefacts, twilight oud hair and body perfume 5000naira.jpg"
    },
    {
        "id":  132,
        "name":  "Facefacts, cherry bliss, sweet clow set",
        "brand":  "Facefacts",
        "price":  18000,
        "image":  "images/133- Facefacts, cherry bliss, sweet clow set 18000naira.jpg"
    },
    {
        "id":  133,
        "name":  "Facefacts, cherry bliss, glow perfume",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/134- Facefacts, cherry bliss, glow perfume 5000naira.jpg"
    },
    {
        "id":  134,
        "name":  "Facefacts, cherry bliss, brightening toner",
        "brand":  "Facefacts",
        "price":  5500,
        "image":  "images/135- Facefacts, cherry bliss, brightening toner 5500naira.jpg"
    },
    {
        "id":  135,
        "name":  "Facefacts, cherry bliss, hydro cream",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/136- Facefacts, cherry bliss, hydro cream 5000naira.jpg"
    },
    {
        "id":  136,
        "name":  "Facefacts, energizing, body serum",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/137- Facefacts, energizing, body serum 4500naira.jpg"
    },
    {
        "id":  137,
        "name":  "Facefacts, multibiotic, daily defence facial serum",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/138- Facefacts, multibiotic, daily defence facial serum 6000naira.jpg"
    },
    {
        "id":  138,
        "name":  "Facefacts, multi moisture gel balm",
        "brand":  "Facefacts",
        "price":  5500,
        "image":  "images/139- Facefacts, multi moisture gel balm, 5500naira.jpg"
    },
    {
        "id":  139,
        "name":  "Facefacts, wonder body cream",
        "brand":  "Facefacts",
        "price":  5500,
        "image":  "images/140- Facefacts, wonder body cream 5500naira.jpg"
    },
    {
        "id":  140,
        "name":  "Facefacts, glow revival cleanser, gentle milky foam wash",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/141- Facefacts, glow revival cleanser, gentle milky foam wash 5000naira.jpg"
    },
    {
        "id":  141,
        "name":  "Facefacts, wonder cream, instant glow reviver",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/142- Facefacts, wonder cream, instant glow reviver 5000naira.jpg"
    },
    {
        "id":  142,
        "name":  "Facefacts, facial glo oil",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/143- Facefacts, facial glo oil 5000naira.jpg"
    },
    {
        "id":  143,
        "name":  "Facefacts, radiance serum, perfecting glow ehencer",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/144- Facefacts, radiance serum, perfecting glow ehencer 5000naira.jpg"
    },
    {
        "id":  144,
        "name":  "Facefacts, bronzing glow drops",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/145- Facefacts, bronzing glow drops 5000naira.jpg"
    },
    {
        "id":  145,
        "name":  "Facefacts, cica correcting multi-balm",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/146- Facefacts, cica correcting multi-balm 5000naira.jpg"
    },
    {
        "id":  146,
        "name":  "Facefacts, silky tinted primer, pore bluring base",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/147- Facefacts, silky tinted primer, pore bluring base 5000naira.jpg"
    },
    {
        "id":  147,
        "name":  "Facefacts, perfect prep primer, illuminating skin serum",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/148- Facefacts, perfect prep primer, illuminating skin serum 5000naira.jpg"
    },
    {
        "id":  148,
        "name":  "Facefacts, plumping sheet mask",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/149- Facefacts, plumping sheet mask 5000naira.jpg"
    },
    {
        "id":  149,
        "name":  "Facefacts, gel-cream moisturiser",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/150- Facefacts, gel-cream moisturiser 6000naira.jpg"
    },
    {
        "id":  150,
        "name":  "Facefacts, gel-cream cleanser",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/151- Facefacts, gel-cream cleanser 6000naira.jpg"
    },
    {
        "id":  151,
        "name":  "Facefacts, cica, color correcting cream",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/152- Facefacts, cica, color correcting cream 5000naira.jpg"
    },
    {
        "id":  152,
        "name":  "Facefacts, cica boost, repairing body cream",
        "brand":  "Facefacts",
        "price":  5500,
        "image":  "images/153- Facefacts, cica boost, repairing body cream 5500naira.jpg"
    },
    {
        "id":  153,
        "name":  "Facefacts, cica boost, hydrating water syrum 30ml",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/154- Facefacts, cica boost, hydrating water syrum 30ml 5000naira.jpg"
    },
    {
        "id":  154,
        "name":  "Facefacts, cica boost, hydrating water syrum 100ml",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/155- Facefacts, cica boost, hydrating water syrum 100ml, 5000naira.jpg"
    },
    {
        "id":  155,
        "name":  "dove body lotion, intense care",
        "brand":  "dove body lotion",
        "price":  5500,
        "image":  "images/156- dove body lotion, intense care 5500naira.jpg"
    },
    {
        "id":  156,
        "name":  "dove body lotion, restoring care",
        "brand":  "dove body lotion",
        "price":  5500,
        "image":  "images/156- dove body lotion, restoring care 5500naira.jpg"
    },
    {
        "id":  157,
        "name":  "drip, vitamin c brightening soap",
        "brand":  "drip",
        "price":  900,
        "image":  "images/157- drip, vitamin c brightening soap 900naira.jpg"
    },
    {
        "id":  158,
        "name":  "drip, papaya brightening soap",
        "brand":  "drip",
        "price":  900,
        "image":  "images/158- drip, papaya brightening soap 900naira.jpg"
    },
    {
        "id":  159,
        "name":  "drip, gold brightening soap",
        "brand":  "drip",
        "price":  900,
        "image":  "images/159- drip, gold brightening soap 900naira.jpg"
    },
    {
        "id":  160,
        "name":  "dove, beauty cream bar",
        "brand":  "dove",
        "price":  1000,
        "image":  "images/160- dove, beauty cream bar.jpg"
    },
    {
        "id":  161,
        "name":  "beauty formulas, smoothing body wash",
        "brand":  "beauty formulas",
        "price":  7000,
        "image":  "images/161- beauty formulas, smoothing body wash 7000naira.jpg"
    },
    {
        "id":  162,
        "name":  "beauty formulas, illuminating body wash",
        "brand":  "beauty formulas",
        "price":  7000,
        "image":  "images/162- beauty formulas, illuminating body wash 7000naira.jpg"
    },
    {
        "id":  163,
        "name":  "beauty formulas, brightening body wash",
        "brand":  "beauty formulas",
        "price":  7000,
        "image":  "images/163- beauty formulas, brightening body wash 7000naira.jpg"
    },
    {
        "id":  164,
        "name":  "beauty formulas, illuminating body lotion",
        "brand":  "beauty formulas",
        "price":  7000,
        "image":  "images/164- beauty formulas, illuminating body lotion 7000naira.jpg"
    },
    {
        "id":  165,
        "name":  "beauty formulas, soothing body lotion",
        "brand":  "beauty formulas",
        "price":  7000,
        "image":  "images/165- beauty formulas, soothing body lotion 7000naira.jpg"
    },
    {
        "id":  166,
        "name":  "beauty formulas, brightening body lotion",
        "brand":  "beauty formulas",
        "price":  7000,
        "image":  "images/166- beauty formulas, brightening body lotion 7000naira.jpg"
    },
    {
        "id":  167,
        "name":  "dove pampering",
        "brand":  "dove",
        "price":  7500,
        "image":  "images/167- dove pampering 7500naira.jpg"
    },
    {
        "id":  168,
        "name":  "dove glowing",
        "brand":  "dove",
        "price":  7500,
        "image":  "images/168- dove glowing 7500naira.jpg"
    },
    {
        "id":  169,
        "name":  "dove calming",
        "brand":  "dove",
        "price":  7500,
        "image":  "images/169- dove calming 7500naira.jpg"
    },
    {
        "id":  170,
        "name":  "dove relaxing",
        "brand":  "dove",
        "price":  7500,
        "image":  "images/170- dove relaxing 7500naira.jpg"
    },
    {
        "id":  171,
        "name":  "beauty formulas, brightening eye gel",
        "brand":  "beauty formulas",
        "price":  2500,
        "image":  "images/171- beauty formulas, brightening eye gel 2500naira.jpg"
    },
    {
        "id":  172,
        "name":  "beauty formulas, glow serum",
        "brand":  "beauty formulas",
        "price":  3000,
        "image":  "images/171- beauty formulas, glow serum 3000naira.jpg"
    },
    {
        "id":  173,
        "name":  "beauty formulas, renewing serum",
        "brand":  "beauty formulas",
        "price":  3000,
        "image":  "images/172- beauty formulas, renewing serum 3000naira.jpg"
    },
    {
        "id":  174,
        "name":  "beauty formulas, iluminating serum",
        "brand":  "beauty formulas",
        "price":  3000,
        "image":  "images/173- beauty formulas, iluminating serum 3000naira.jpg"
    },
    {
        "id":  175,
        "name":  "beauty formulas, moisture serum",
        "brand":  "beauty formulas",
        "price":  3000,
        "image":  "images/174- beauty formulas, moisture serum 3000naira.jpg"
    },
    {
        "id":  176,
        "name":  "beauty formulas, repairing serum",
        "brand":  "beauty formulas",
        "price":  3000,
        "image":  "images/175- beauty formulas, repairing serum 3000naira.jpg"
    },
    {
        "id":  177,
        "name":  "beauty formulas, recovery moisturiser",
        "brand":  "beauty formulas",
        "price":  3000,
        "image":  "images/176- beauty formulas, recovery moisturiser 3000naira.jpg"
    },
    {
        "id":  178,
        "name":  "beauty formulas, brightening vitamin c eye gel patches",
        "brand":  "beauty formulas",
        "price":  2500,
        "image":  "images/177- beauty formulas, brightening vitamin c eye gel patches 2500naira.jpg"
    },
    {
        "id":  179,
        "name":  "rebonn body lotion",
        "brand":  "rebonn",
        "price":  8500,
        "image":  "images/178- rebonn body lotion 8500naira.jpg"
    },
    {
        "id":  180,
        "name":  "almond deep brightening lotion",
        "brand":  "almond",
        "price":  5000,
        "image":  "images/179- almond deep brightening lotion 5000naira.jpg"
    },
    {
        "id":  181,
        "name":  "moisturiser retinol 30ml",
        "brand":  "moisturiser",
        "price":  2500,
        "image":  "images/180- moisturiser retinol 30ml 2500naira.jpg"
    },
    {
        "id":  182,
        "name":  "moisturiser retinol 75ml",
        "brand":  "moisturiser",
        "price":  2350,
        "image":  "images/181- moisturiser retinol 75ml 2350naira.jpg"
    },
    {
        "id":  183,
        "name":  "brightening vitamin c, facial tonic",
        "brand":  "brightening vitamin c",
        "price":  2350,
        "image":  "images/182- brightening vitamin c, facial tonic 2350naira.jpg"
    },
    {
        "id":  184,
        "name":  "brightening vitamin c, daily moisturiser",
        "brand":  "brightening vitamin c",
        "price":  2350,
        "image":  "images/183- brightening vitamin c, daily moisturiser 2350naira.jpg"
    },
    {
        "id":  185,
        "name":  "blackhead control facial scrub",
        "brand":  "blackhead",
        "price":  2350,
        "image":  "images/184- blackhead control facial scrub 2350naira.jpg"
    },
    {
        "id":  186,
        "name":  "brightening vitamin c, daily facial wash",
        "brand":  "brightening vitamin c",
        "price":  2350,
        "image":  "images/184- brightening vitamin c, daily facial wash 2350naira.jpg"
    },
    {
        "id":  187,
        "name":  "retinol, gel cleanser",
        "brand":  "retinol",
        "price":  2350,
        "image":  "images/185- retinol, gel cleanser  2350naira.jpg"
    },
    {
        "id":  188,
        "name":  "honey and almond facial scrub",
        "brand":  "honey",
        "price":  2350,
        "image":  "images/186- honey and almond facial scrub 2350naira.jpg"
    },
    {
        "id":  189,
        "name":  "ginger and tumeric facial scrub",
        "brand":  "ginger",
        "price":  2350,
        "image":  "images/187- ginger and tumeric facial scrub 2350naira.jpg"
    },
    {
        "id":  190,
        "name":  "stimulating body syrum spray",
        "brand":  "stimulating",
        "price":  3500,
        "image":  "images/188- stimulating body syrum spray 3500naira.jpg"
    },
    {
        "id":  191,
        "name":  "niacinamide facial mist",
        "brand":  "niacinamide",
        "price":  3000,
        "image":  "images/189- niacinamide facial mist 3000naira.jpg"
    },
    {
        "id":  192,
        "name":  "recharging toner, ceramides",
        "brand":  "recharging toner",
        "price":  3500,
        "image":  "images/190- recharging toner, ceramides 3500naira.jpg"
    },
    {
        "id":  193,
        "name":  "conditioning body syrum spray",
        "brand":  "conditioning",
        "price":  3500,
        "image":  "images/191- conditioning body syrum spray 3500naira.jpg"
    },
    {
        "id":  194,
        "name":  "axe dark temptation",
        "brand":  "axe",
        "price":  3800,
        "image":  "images/192- axe dark temptation 3800naira.jpg"
    },
    {
        "id":  195,
        "name":  "axe sport blast",
        "brand":  "axe",
        "price":  3800,
        "image":  "images/193- axe sport blast 3800naira.jpg"
    },
    {
        "id":  196,
        "name":  "glow recipe, pomegranate and hyaluronic",
        "brand":  "glow recipe",
        "price":  8500,
        "image":  "images/194- glow recipe, pomegranate and hyaluronic 8500naira.jpg"
    },
    {
        "id":  197,
        "name":  "glow recipe, vitamin c and rectinol",
        "brand":  "glow recipe",
        "price":  8500,
        "image":  "images/194- glow recipe, vitamin c and rectinol 8500naira.jpg"
    },
    {
        "id":  198,
        "name":  "glow recipe, papayas and calamansi",
        "brand":  "glow recipe",
        "price":  8500,
        "image":  "images/195- glow recipe, papayas and calamansi 8500naira.jpg"
    },
    {
        "id":  199,
        "name":  "glow recipe, watermelon and niacinamide",
        "brand":  "glow recipe",
        "price":  8500,
        "image":  "images/196- glow recipe, watermelon and niacinamide 8500naira.jpg"
    },
    {
        "id":  200,
        "name":  "morrocan argan, ceramide honey",
        "brand":  "morrocan argan",
        "price":  5200,
        "image":  "images/197- morrocan argan, ceramide honey 5200naira.jpg"
    },
    {
        "id":  201,
        "name":  "morrocan argan, vitamin c",
        "brand":  "morrocan argan",
        "price":  5200,
        "image":  "images/198- morrocan argan, vitamin c 5200naira.jpg"
    },
    {
        "id":  202,
        "name":  "morrocan argan, hyaluronic acid oil",
        "brand":  "morrocan argan",
        "price":  5200,
        "image":  "images/199- morrocan argan, hyaluronic acid oil 5200naira.jpg"
    },
    {
        "id":  203,
        "name":  "morrocan argan, saponia niacinamide",
        "brand":  "morrocan argan",
        "price":  8500,
        "image":  "images/200- morrocan argan, saponia niacinamide 8500naira.jpg"
    },
    {
        "id":  204,
        "name":  "morrocan argan, saponia salycic",
        "brand":  "morrocan argan",
        "price":  8500,
        "image":  "images/201- morrocan argan, saponia salycic 8500naira.jpg"
    },
    {
        "id":  205,
        "name":  "morrocan argan, saponia vitamin c",
        "brand":  "morrocan argan",
        "price":  8500,
        "image":  "images/201 morrocan argan, saponia vitamin c 8500naira.jpg"
    },
    {
        "id":  206,
        "name":  "ivory glow, vitamin c and vitamin b3 lotion",
        "brand":  "ivory glow",
        "price":  11000,
        "image":  "images/202- ivory glow, vitamin c and vitamin b3 lotion 11000naira.jpg"
    },
    {
        "id":  207,
        "name":  "ivory glow, tumeric and curcumin lotion",
        "brand":  "ivory glow",
        "price":  11000,
        "image":  "images/203- ivory glow, tumeric and curcumin lotion 11000naira.jpg"
    },
    {
        "id":  208,
        "name":  "ivory glow, retinol and amino acid lotion",
        "brand":  "ivory glow",
        "price":  11000,
        "image":  "images/204- ivory glow, retinol and amino acid lotion 11000naira.jpg"
    },
    {
        "id":  209,
        "name":  "retinol serum",
        "brand":  "retinol",
        "price":  6800,
        "image":  "images/205- retinol serum, 6800naira.jpg"
    },
    {
        "id":  210,
        "name":  "skeenpoint, 10 percent niacinamide serum",
        "brand":  "skeenpoint",
        "price":  6800,
        "image":  "images/206- skeenpoint, 10 percent niacinamide serum, 6800naira.jpg"
    },
    {
        "id":  211,
        "name":  "dr rasael tumeric half cast lotion, 6 days",
        "brand":  "dr rasael tumeric half cast lotion",
        "price":  5500,
        "image":  "images/207- dr rasael tumeric half cast lotion, 6 days 5500naira.jpg"
    },
    {
        "id":  212,
        "name":  "dr rasael 24k half cast lotion, 9 days",
        "brand":  "dr rasael 24k half cast lotion",
        "price":  5500,
        "image":  "images/208- dr rasael 24k half cast lotion, 9 days 5500naira.jpg"
    },
    {
        "id":  213,
        "name":  "beauty iq, glow booster face and body oil",
        "brand":  "beauty iq",
        "price":  5500,
        "image":  "images/209- beauty iq, glow booster face and body oil 5500naira.jpg"
    },
    {
        "id":  214,
        "name":  "beauty iq, tumeric face and body oil",
        "brand":  "beauty iq",
        "price":  5500,
        "image":  "images/210- beauty iq, tumeric face and body oil 5500naira.jpg"
    },
    {
        "id":  215,
        "name":  "beauty iq, vitamin c face and body oil",
        "brand":  "beauty iq",
        "price":  5500,
        "image":  "images/211- beauty iq, vitamin c face and body oil 5500naira.jpg"
    },
    {
        "id":  216,
        "name":  "beauty iq, carrot face and body oil",
        "brand":  "beauty iq",
        "price":  5500,
        "image":  "images/212- beauty iq, carrot face and body oil 5500naira.jpg"
    },
    {
        "id":  217,
        "name":  "beauty iq, niacinamide  face and body oil",
        "brand":  "beauty iq",
        "price":  5500,
        "image":  "images/213- beauty iq, niacinamide  face and body oil, 5500naira.jpg"
    },
    {
        "id":  218,
        "name":  "sknfacts, ceramide vitamin c facial serum",
        "brand":  "sknfacts",
        "price":  4000,
        "image":  "images/214- sknfacts, ceramide vitamin c facial serum, 4000naira.jpg"
    },
    {
        "id":  219,
        "name":  "sknfacts, ceramide hydrating face toner",
        "brand":  "sknfacts",
        "price":  4000,
        "image":  "images/215- sknfacts, ceramide hydrating face toner, 4000naira.jpg"
    },
    {
        "id":  220,
        "name":  "sknfacts, ceramide hydrating facial serum",
        "brand":  "sknfacts",
        "price":  4000,
        "image":  "images/215- sknfacts, ceramide hydrating facial serum, 4000naira.jpg"
    },
    {
        "id":  221,
        "name":  "sknfacts, ceramide acne treatment facial toner",
        "brand":  "sknfacts",
        "price":  4000,
        "image":  "images/216- sknfacts, ceramide acne treatment facial toner, 4000naira.jpg"
    },
    {
        "id":  222,
        "name":  "sknfacts, ceramide brightening facial toner",
        "brand":  "sknfacts",
        "price":  4000,
        "image":  "images/217- sknfacts, ceramide brightening facial toner, 4000naira.jpg"
    },
    {
        "id":  223,
        "name":  "beauty formulas, brightening vitamin c wipes",
        "brand":  "beauty formulas",
        "price":  0,
        "image":  "images/218- beauty formulas, brightening vitamin c wipes.jpg"
    },
    {
        "id":  224,
        "name":  "beauty formulas, cucmber wipes",
        "brand":  "beauty formulas",
        "price":  2000,
        "image":  "images/219- beauty formulas, cucmber wipes 2000naira.jpg"
    },
    {
        "id":  225,
        "name":  "beauty formulas, soft apricot wipes",
        "brand":  "beauty formulas",
        "price":  2000,
        "image":  "images/220- beauty formulas, soft apricot wipes, 2000naira.jpg"
    },
    {
        "id":  226,
        "name":  "beauty formulas, argon oil wipes",
        "brand":  "beauty formulas",
        "price":  2000,
        "image":  "images/221- beauty formulas, argon oil wipes, 2000naira.jpg"
    },
    {
        "id":  227,
        "name":  "asian secrets, vitamin c wipes",
        "brand":  "asian secrets",
        "price":  2000,
        "image":  "images/222- asian secrets, vitamin c wipes, 2000naira.jpg"
    },
    {
        "id":  228,
        "name":  "Bitnara, vitamin c serum",
        "brand":  "Bitnara",
        "price":  6500,
        "image":  "images/223- Bitnara, vitamin c serum 6500naira.jpg"
    },
    {
        "id":  229,
        "name":  "BioNature, discoloration correction serum",
        "brand":  "BioNature",
        "price":  6500,
        "image":  "images/224- BioNature, discoloration correction serum 6500naira.jpg"
    },
    {
        "id":  230,
        "name":  "BioNature, retinol reforming face serum",
        "brand":  "BioNature",
        "price":  6500,
        "image":  "images/225- BioNature, retinol reforming face serum, 6500naira.jpg"
    },
    {
        "id":  231,
        "name":  "BioNature, Healthy Glow pro lightening scrub shower cream",
        "brand":  "BioNature",
        "price":  8000,
        "image":  "images/226- BioNature, Healthy Glow pro lightening scrub shower cream, 8000naira.jpg"
    },
    {
        "id":  232,
        "name":  "BioNature, Healthy Glow skin treatment oil",
        "brand":  "BioNature",
        "price":  10500,
        "image":  "images/227- BioNature, Healthy Glow skin treatment oil, 10500naira.jpg"
    },
    {
        "id":  233,
        "name":  "BioNature, Healthy Glow face moisturiser",
        "brand":  "BioNature",
        "price":  8500,
        "image":  "images/228- BioNature, Healthy Glow face moisturiser, 8500naira.jpg"
    },
    {
        "id":  234,
        "name":  "Dr Rashael, Vitamin C half cast 7days",
        "brand":  "Dr Rashael",
        "price":  5500,
        "image":  "images/229- Dr Rashael, Vitamin C half cast 7days, 5500naira.jpg"
    },
    {
        "id":  235,
        "name":  "Dr Rashael,  half cast 5days",
        "brand":  "Dr Rashael",
        "price":  5500,
        "image":  "images/230- Dr Rashael,  half cast 5days, 5500naira.jpg"
    },
    {
        "id":  236,
        "name":  "Dr Rashael, carrot half cast 10days",
        "brand":  "Dr Rashael",
        "price":  5500,
        "image":  "images/231- Dr Rashael, carrot half cast 10days, 5500naira.jpg"
    },
    {
        "id":  237,
        "name":  "BioNature, Healthy Glow glycolic acid exfoliating toner",
        "brand":  "BioNature",
        "price":  6500,
        "image":  "images/232- BioNature, Healthy Glow glycolic acid exfoliating toner, 6500naira.jpg"
    },
    {
        "id":  238,
        "name":  "BioNature, Healthy Glow all in one ultra cleansing toner",
        "brand":  "BioNature",
        "price":  4500,
        "image":  "images/233- BioNature, Healthy Glow all in one ultra cleansing toner, 4500naira.jpg"
    },
    {
        "id":  239,
        "name":  "BioNature, Healthy Glow clear face milky brightening toner",
        "brand":  "BioNature",
        "price":  6500,
        "image":  "images/233- BioNature, Healthy Glow clear face milky brightening toner, 6500naira.jpg"
    },
    {
        "id":  240,
        "name":  "BioNature, Healthy Glow all in one pro cleansing toner",
        "brand":  "BioNature",
        "price":  4500,
        "image":  "images/234- BioNature, Healthy Glow all in one pro cleansing toner, 4500naira.jpg"
    },
    {
        "id":  241,
        "name":  "BioNature, Healthy Glow clear skin brightening milk",
        "brand":  "BioNature",
        "price":  8000,
        "image":  "images/235- BioNature, Healthy Glow clear skin brightening milk, 8000naira.jpg"
    },
    {
        "id":  242,
        "name":  "Perfect Cosmetics, simply white 4 in 1 whitening cleanser",
        "brand":  "Perfect Cosmetics",
        "price":  5000,
        "image":  "images/236- Perfect Cosmetics, simply white 4 in 1 whitening cleanser, 5000naira.jpg"
    },
    {
        "id":  243,
        "name":  "Perfect Cosmetics, simply white body lotion",
        "brand":  "Perfect Cosmetics",
        "price":  7500,
        "image":  "images/236- Perfect Cosmetics, simply white body lotion, 7500naira.jpg"
    },
    {
        "id":  244,
        "name":  "Perfect Cosmetics, whitening and lifting facial foam",
        "brand":  "Perfect Cosmetics",
        "price":  5000,
        "image":  "images/236- Perfect Cosmetics, whitening and lifting facial foam, 5000naira.jpg"
    },
    {
        "id":  245,
        "name":  "Perfect Cosmetics, simply white body wash",
        "brand":  "Perfect Cosmetics",
        "price":  7000,
        "image":  "images/237- Perfect Cosmetics, simply white body wash, 7000naira.jpg"
    },
    {
        "id":  246,
        "name":  "Perfect Cosmetics, simply white scrub",
        "brand":  "Perfect Cosmetics",
        "price":  5000,
        "image":  "images/238- Perfect Cosmetics, simply white scrub, 5000naira.jpg"
    },
    {
        "id":  247,
        "name":  "Perfect Cosmetics, simply white face serum",
        "brand":  "Perfect Cosmetics",
        "price":  5500,
        "image":  "images/239- Perfect Cosmetics, simply white face serum, 5500naira.jpg"
    },
    {
        "id":  248,
        "name":  "Perfect Cosmetics, simply white intimate wash",
        "brand":  "Perfect Cosmetics",
        "price":  5000,
        "image":  "images/240- Perfect Cosmetics, simply white intimate wash, 5000naira.jpg"
    },
    {
        "id":  249,
        "name":  "Perfect Cosmetics, simply white lip and eye makeup remover",
        "brand":  "Perfect Cosmetics",
        "price":  5000,
        "image":  "images/241- Perfect Cosmetics, simply white lip and eye makeup remover, 5000naira.jpg"
    },
    {
        "id":  250,
        "name":  "Bitnara, Niacinamide Txa Hyaluronic serum",
        "brand":  "Bitnara",
        "price":  6000,
        "image":  "images/242- Bitnara, Niacinamide Txa Hyaluronic serum, 6000naira.jpg"
    },
    {
        "id":  251,
        "name":  "Bitnara, Hydrating and brightening body wash",
        "brand":  "Bitnara",
        "price":  7500,
        "image":  "images/243- Bitnara, Hydrating and brightening body wash, 7500naira.jpg"
    },
    {
        "id":  252,
        "name":  "KB 45, White gold ultra body lotion",
        "brand":  "KB 45",
        "price":  5500,
        "image":  "images/243- KB 45, White gold ultra body lotion, 5500naira.jpg"
    },
    {
        "id":  253,
        "name":  "KB 45, White gold halfcast body lotion",
        "brand":  "KB 45",
        "price":  5500,
        "image":  "images/244- KB 45, White gold halfcast body lotion, 5500naira.jpg"
    },
    {
        "id":  254,
        "name":  "Lilly Cosmetics, Hydrating body lotion",
        "brand":  "Lilly Cosmetics",
        "price":  6000,
        "image":  "images/245- Lilly Cosmetics, Hydrating body lotion, 6000naira.jpg"
    },
    {
        "id":  255,
        "name":  "Lilly Cosmetics, Moisturising Shower gel",
        "brand":  "Lilly Cosmetics",
        "price":  6500,
        "image":  "images/246- Lilly Cosmetics, Moisturising Shower gel, 6500naira.jpg"
    },
    {
        "id":  256,
        "name":  "Medix 5.5, Coconut oil plus manuka honey",
        "brand":  "Medix 5.5",
        "price":  16900,
        "image":  "images/247- Medix 5.5, Coconut oil plus manuka honey, 16900naira.jpg"
    },
    {
        "id":  257,
        "name":  "Medix 5.5, Collagen peptides",
        "brand":  "Medix 5.5",
        "price":  16900,
        "image":  "images/248- Medix 5.5, Collagen peptides, 16900naira.jpg"
    },
    {
        "id":  258,
        "name":  "Perfect cosmetics, Papaya moisturizing cream",
        "brand":  "Perfect cosmetics",
        "price":  3000,
        "image":  "images/249- Perfect cosmetics, Papaya moisturizing cream, 3000naira.jpg"
    },
    {
        "id":  259,
        "name":  "Advanced clinicals, Aleo vera cream",
        "brand":  "Advanced clinicals",
        "price":  12000,
        "image":  "images/250- Advanced clinicals, Aleo vera cream, 12000naira.jpg"
    },
    {
        "id":  260,
        "name":  "SkinAcademy Cleanse, Facial scrub",
        "brand":  "SkinAcademy Cleanse",
        "price":  2000,
        "image":  "images/251- SkinAcademy Cleanse, Facial scrub, 2000naira.jpg"
    },
    {
        "id":  261,
        "name":  "Summer ice, Hydrating bright scrub Gommage gel douche",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/252- Summer ice, Hydrating bright scrub Gommage gel douche, 6500naira.jpg"
    },
    {
        "id":  262,
        "name":  "Summer ice, Nourishing Body wash Avocado and Vitamin E",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/252- Summer ice, Nourishing Body wash Avocado and Vitamin E, 6500naira.jpg"
    },
    {
        "id":  263,
        "name":  "Summer ice, Pampering body wash Hyaluronic and Berry",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/252- Summer ice, Pampering body wash Hyaluronic and Berry, 6500naira.jpg"
    },
    {
        "id":  264,
        "name":  "Summer ice, Hydrating body wash cocoa and shea butter",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/253- Summer ice, Hydrating body wash cocoa and shea butter, 6500naira.jpg"
    },
    {
        "id":  265,
        "name":  "Summer ice, hydrating bright scrub shower gel",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/254- Summer ice, hydrating bright scrub shower gel, 6500naira.jpg"
    },
    {
        "id":  266,
        "name":  "Summer ice, Relaxing Body Wash Tumeric and Neem",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/255- Summer ice, Relaxing Body Wash Tumeric and Neem, 6500naira.jpg"
    },
    {
        "id":  267,
        "name":  "Summer ice, rejuvenating body wash Honey and Apple",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/256- Summer ice, rejuvenating body wash Honey and Apple, 6500naira.jpg"
    },
    {
        "id":  268,
        "name":  "Summer ice, Relaxing body wash Tumeric and Neem",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/257- Summer ice, Relaxing body wash Tumeric and Neem, 6500naira.jpg"
    },
    {
        "id":  269,
        "name":  "Summer ice, Renewal smoothing body lotion urea 10percent",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/258- Summer ice, Renewal smoothing body lotion urea 10percent, 6500naira.jpg"
    },
    {
        "id":  270,
        "name":  "Summer ice, Replenishing body lotion Tea tree and lilies",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/258- Summer ice, Replenishing body lotion Tea tree and lilies, 6500naira.jpg"
    },
    {
        "id":  271,
        "name":  "Summer ice, Rejuvenating body lotion Honey and Apple",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/259- Summer ice, Rejuvenating body lotion Honey and Apple, 6500naira.jpg"
    },
    {
        "id":  272,
        "name":  "Summer ice, Skin nourishing body lotion Avocado and Vitamin E",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/260- Summer ice, Skin nourishing body lotion Avocado and Vitamin E, 6500naira.jpg"
    },
    {
        "id":  273,
        "name":  "Summer ice, Glow soothing body lotion Oatmeal and almond",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/261- Summer ice, Glow soothing body lotion Oatmeal and almond, 6500naira.jpg"
    },
    {
        "id":  274,
        "name":  "Summer ice, Skin Glowing body lotion Vitamin c and B",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/262- Summer ice, Skin Glowing body lotion Vitamin c and B3, 6500naira.jpg"
    },
    {
        "id":  275,
        "name":  "Summer ice, Naturally indulgent body lotion Ceramide 2percent",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/263- Summer ice, Naturally indulgent body lotion Ceramide 2percent, 6500naira.jpg"
    },
    {
        "id":  276,
        "name":  "Summer ice, Anti aging body lotion collagen and retinol",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/264- Summer ice, Anti aging body lotion collagen and retinol, 6500naira.jpg"
    },
    {
        "id":  277,
        "name":  "Summer ice, Rose soothing body lotion Rose and orchid extract",
        "brand":  "Summer ice",
        "price":  6500,
        "image":  "images/265- Summer ice, Rose soothing body lotion Rose and orchid extract, 6500naira.jpg"
    },
    {
        "id":  278,
        "name":  "Simple, Detox and brighten clay mask",
        "brand":  "Simple",
        "price":  2400,
        "image":  "images/266- Simple, Detox and brighten clay mask, 2400naira.jpg"
    },
    {
        "id":  279,
        "name":  "Simple, Hydrating light moisturiser",
        "brand":  "Simple",
        "price":  4400,
        "image":  "images/266- Simple, Hydrating light moisturiser, 4400naira.jpg"
    },
    {
        "id":  280,
        "name":  "Simple, Micellar water",
        "brand":  "Simple",
        "price":  6000,
        "image":  "images/267- Simple, Micellar water, 6000naira.jpg"
    },
    {
        "id":  281,
        "name":  "Simple, Replenishing rich moisturiser",
        "brand":  "Simple",
        "price":  4400,
        "image":  "images/268- Simple, Replenishing rich moisturiser, 4400naira.jpg"
    },
    {
        "id":  282,
        "name":  "Simple, Replenishing facial wash",
        "brand":  "Simple",
        "price":  4250,
        "image":  "images/269- Simple, Replenishing facial wash, 4250naira.jpg"
    },
    {
        "id":  283,
        "name":  "Skeenpoint, Glow and radiance brithening body lotion",
        "brand":  "Skeenpoint",
        "price":  8500,
        "image":  "images/270- Skeenpoint, Glow and radiance brithening body lotion, 8500naira.jpg"
    },
    {
        "id":  284,
        "name":  "Hydrate, Facial scrub",
        "brand":  "Hydrate",
        "price":  4500,
        "image":  "images/271- Hydrate, Facial scrub, 4500naira.jpg"
    },
    {
        "id":  285,
        "name":  "Retinol plus peptide",
        "brand":  "Retinol",
        "price":  6000,
        "image":  "images/272- Retinol plus peptide, 6000naira.jpg"
    },
    {
        "id":  286,
        "name":  "Simple, Soothing Facial toner",
        "brand":  "Simple",
        "price":  3000,
        "image":  "images/273- Simple, Soothing Facial toner, 3000naira.jpg"
    },
    {
        "id":  287,
        "name":  "Simple, Micellar water",
        "brand":  "Simple",
        "price":  3250,
        "image":  "images/274- Simple, Micellar water, 3250naira.jpg"
    },
    {
        "id":  288,
        "name":  "Advanced Clinicals, Vitamin C soap",
        "brand":  "Advanced Clinicals",
        "price":  2500,
        "image":  "images/275- Advanced Clinicals, Vitamin C soap 2500naira.jpg"
    },
    {
        "id":  289,
        "name":  "Hydrate, Recovery night cream",
        "brand":  "Hydrate",
        "price":  4500,
        "image":  "images/276- Hydrate, Recovery night cream, 4500naira.jpg"
    },
    {
        "id":  290,
        "name":  "Advanced clinicals, Tumeric and honey soap",
        "brand":  "Advanced clinicals",
        "price":  2500,
        "image":  "images/277- Advanced clinicals, Tumeric and honey soap, 2500naira.jpg"
    },
    {
        "id":  291,
        "name":  "Femfresh, active wash",
        "brand":  "Femfresh",
        "price":  4200,
        "image":  "images/278- Femfresh, active wash, 4200naira.jpg"
    },
    {
        "id":  292,
        "name":  "Femfresh, 0percent sensitive wash",
        "brand":  "Femfresh",
        "price":  4200,
        "image":  "images/279- Femfresh, 0percent sensitive wash, 4200naira.jpg"
    },
    {
        "id":  293,
        "name":  "Skin doctor baby wash, Advanced nourishing and brightening shower gel",
        "brand":  "Skin doctor baby wash",
        "price":  8500,
        "image":  "images/280- Skin doctor baby wash, Advanced nourishing and brightening shower gel, 8500naira.jpg"
    },
    {
        "id":  294,
        "name":  "Skin doctor baby oil, Advanced moisturizing baby oil",
        "brand":  "Skin doctor baby oil",
        "price":  8500,
        "image":  "images/281- Skin doctor baby oil, Advanced moisturizing baby oil, 8500naira.jpg"
    },
    {
        "id":  295,
        "name":  "Skin doctor baby wash, Advanced moisturizing shower gel",
        "brand":  "Skin doctor baby wash",
        "price":  8500,
        "image":  "images/281- Skin doctor baby wash, Advanced moisturizing shower gel, 8500naira.jpg"
    },
    {
        "id":  296,
        "name":  "Skin doctor baby wash, Advanced brightening and calming shower gel",
        "brand":  "Skin doctor baby wash",
        "price":  8500,
        "image":  "images/282- Skin doctor baby wash, Advanced brightening and calming shower gel, 8500naira.jpg"
    },
    {
        "id":  297,
        "name":  "Skin doctor baby wash, Advanced hydrating and glowing shower gel",
        "brand":  "Skin doctor baby wash",
        "price":  8500,
        "image":  "images/283- Skin doctor baby wash, Advanced hydrating and glowing shower gel, 8500naira.jpg"
    },
    {
        "id":  298,
        "name":  "Skin doctor baby oil, Advanced brightening oil gel",
        "brand":  "Skin doctor baby oil",
        "price":  7500,
        "image":  "images/284- Skin doctor baby oil, Advanced brightening oil gel, 7500naira.jpg"
    },
    {
        "id":  299,
        "name":  "X7 Cosmeceutical, Retinol shower gel",
        "brand":  "X7 Cosmeceutical",
        "price":  15200,
        "image":  "images/285- X7 Cosmeceutical, Retinol shower gel, 15200naira.jpg"
    },
    {
        "id":  300,
        "name":  "X7 Cosmeceutical, Lactic acid plus AHA shower gel",
        "brand":  "X7 Cosmeceutical",
        "price":  15200,
        "image":  "images/286- X7 Cosmeceutical, Lactic acid plus AHA shower gel, 15200naira.jpg"
    },
    {
        "id":  301,
        "name":  "X7 Cosmeceutical, Niacinamide shower gel",
        "brand":  "X7 Cosmeceutical",
        "price":  15200,
        "image":  "images/287- X7 Cosmeceutical, Niacinamide shower gel, 15200naira.jpg"
    },
    {
        "id":  302,
        "name":  "X7 Cosmeceutical, Retinol body lotion",
        "brand":  "X7 Cosmeceutical",
        "price":  15200,
        "image":  "images/288- X7 Cosmeceutical, Retinol body lotion, 15200naira.jpg"
    },
    {
        "id":  303,
        "name":  "X7 Cosmeceutical, Glycolic body lotion",
        "brand":  "X7 Cosmeceutical",
        "price":  15200,
        "image":  "images/289- X7 Cosmeceutical, Glycolic body lotion, 15200naira.jpg"
    },
    {
        "id":  304,
        "name":  "X7 Cosmeceutical, Lactic acid plus AHA body lotion",
        "brand":  "X7 Cosmeceutical",
        "price":  15200,
        "image":  "images/290- X7 Cosmeceutical, Lactic acid plus AHA body lotion, 15200naira.jpg"
    },
    {
        "id":  305,
        "name":  "X7 Cosmeceutical, Vitamin C body lotion",
        "brand":  "X7 Cosmeceutical",
        "price":  15200,
        "image":  "images/291- X7 Cosmeceutical, Vitamin C body lotion, 15200naira.jpg"
    },
    {
        "id":  306,
        "name":  "X7 Cosmeceutical, Hyaluronic body lotion",
        "brand":  "X7 Cosmeceutical",
        "price":  15200,
        "image":  "images/292- X7 Cosmeceutical, Hyaluronic body lotion, 15200naira.jpg"
    },
    {
        "id":  307,
        "name":  "Skin doctor, Collagen",
        "brand":  "Skin doctor",
        "price":  8700,
        "image":  "images/293- Skin doctor, Collagen, 8700naira.jpg"
    },
    {
        "id":  308,
        "name":  "Skin doctor, Vitamin C plus tumeric",
        "brand":  "Skin doctor",
        "price":  8700,
        "image":  "images/293- Skin doctor, Vitamin C plus tumeric, 8700naira.jpg"
    },
    {
        "id":  309,
        "name":  "Skin doctor, Blooming jasmine",
        "brand":  "Skin doctor",
        "price":  8700,
        "image":  "images/294- Skin doctor, Blooming jasmine, 8700naira.jpg"
    },
    {
        "id":  310,
        "name":  "Skin doctor, Argan Oil",
        "brand":  "Skin doctor",
        "price":  8700,
        "image":  "images/295- Skin doctor, Argan Oil, 8700naira.jpg"
    },
    {
        "id":  311,
        "name":  "Glow theory wash, Ferulic acid plus Niacinamide",
        "brand":  "Glow theory wash",
        "price":  8500,
        "image":  "images/296- Glow theory wash, Ferulic acid plus Niacinamide, 8500naira.jpg"
    },
    {
        "id":  312,
        "name":  "Glow theory wash, Peptide plus Kojic acid",
        "brand":  "Glow theory wash",
        "price":  8500,
        "image":  "images/297- Glow theory wash, Peptide plus Kojic acid, 8500naira.jpg"
    },
    {
        "id":  313,
        "name":  "Glow theory wash, Rice plus coix seed",
        "brand":  "Glow theory wash",
        "price":  8500,
        "image":  "images/298- Glow theory wash, Rice plus coix seed, 8500naira.jpg"
    },
    {
        "id":  314,
        "name":  "Glow theory wash, VitaminC plus tumeric",
        "brand":  "Glow theory wash",
        "price":  8500,
        "image":  "images/299- Glow theory wash, VitaminC plus tumeric, 8500naira.jpg"
    },
    {
        "id":  315,
        "name":  "Glow theory lotion, White and smooth radiance",
        "brand":  "Glow theory lotion",
        "price":  8500,
        "image":  "images/300- Glow theory lotion, White and smooth radiance, 8500naira.jpg"
    },
    {
        "id":  316,
        "name":  "Glow theory lotion, care and moisturising lotion",
        "brand":  "Glow theory lotion",
        "price":  8500,
        "image":  "images/301- Glow theory lotion, care and moisturising lotion, 8500naira.jpg"
    },
    {
        "id":  317,
        "name":  "Skin active 50 plus, Skin whitening body lotion",
        "brand":  "Skin active 50 plus",
        "price":  7900,
        "image":  "images/302- Skin active 50 plus, Skin whitening body lotion, 7900naira.jpg"
    },
    {
        "id":  318,
        "name":  "Skin active 50 plus, Skin whitening milk",
        "brand":  "Skin active 50 plus",
        "price":  7900,
        "image":  "images/303- Skin active 50 plus, Skin whitening milk,, 7900naira.jpg"
    },
    {
        "id":  319,
        "name":  "Skin active 50 plus, Skin whitening milk red",
        "brand":  "Skin active 50 plus",
        "price":  7900,
        "image":  "images/304- Skin active 50 plus, Skin whitening milk red,, 7900naira.jpg"
    },
    {
        "id":  320,
        "name":  "Simple, Age resisting night cream",
        "brand":  "Simple",
        "price":  4000,
        "image":  "images/305- Simple, Age resisting night cream, 4000naira.jpg"
    },
    {
        "id":  321,
        "name":  "Skin doctor, Dark spot remover soap",
        "brand":  "Skin doctor",
        "price":  1900,
        "image":  "images/306- Skin doctor, Dark spot remover soap, 1900naira.jpg"
    },
    {
        "id":  322,
        "name":  "Egyptian Quench white glow, Caviar body lotion",
        "brand":  "Egyptian Quench white glow",
        "price":  11300,
        "image":  "images/307- Egyptian Quench white glow, Caviar body lotion 11300.jpg"
    },
    {
        "id":  323,
        "name":  "Egyptian Quench white glow, Vitamin c body lotion",
        "brand":  "Egyptian Quench white glow",
        "price":  11300,
        "image":  "images/308- Egyptian Quench white glow, Vitamin c body lotion, 11300naira.jpg"
    },
    {
        "id":  324,
        "name":  "Baby diary bath, Amino acid and blue berry",
        "brand":  "Baby diary bath",
        "price":  6550,
        "image":  "images/309- Baby diary bath, Amino acid and blue berry, 6550naira.jpg"
    },
    {
        "id":  325,
        "name":  "Baby diary bath, goat milk and honey",
        "brand":  "Baby diary bath",
        "price":  6550,
        "image":  "images/310- Baby diary bath, goat milk and honey, 6550naira.jpg"
    },
    {
        "id":  326,
        "name":  "Baby diary bath, Vitamin C",
        "brand":  "Baby diary bath",
        "price":  6550,
        "image":  "images/311- Baby diary bath, Vitamin C, 6550naira.jpg"
    },
    {
        "id":  327,
        "name":  "Baby diary bath, Vitamin C and niacinamide",
        "brand":  "Baby diary bath",
        "price":  6550,
        "image":  "images/312- Baby diary bath, Vitamin C and niacinamide, 6550naira.jpg"
    },
    {
        "id":  328,
        "name":  "Baby diary bath, apple and pear",
        "brand":  "Baby diary bath",
        "price":  6550,
        "image":  "images/313- Baby diary bath, apple and pear, 6550naira.jpg"
    },
    {
        "id":  329,
        "name":  "Baby diary bath, Chamomile and strawberry",
        "brand":  "Baby diary bath",
        "price":  6550,
        "image":  "images/314- Baby diary bath, Chamomile and strawberry, 6550naira.jpg"
    },
    {
        "id":  330,
        "name":  "Baby diary lotion, Vitamin C and mixed fruit",
        "brand":  "Baby diary lotion",
        "price":  5500,
        "image":  "images/315- Baby diary lotion, Vitamin C and mixed fruit, 5500naira.jpg"
    },
    {
        "id":  331,
        "name":  "Baby diary powder, Vitamin C and orange",
        "brand":  "Baby diary powder",
        "price":  3700,
        "image":  "images/316- Baby diary powder, Vitamin C and orange, 3700naira.jpg"
    },
    {
        "id":  332,
        "name":  "Baby diary soap, Vitamin C and niacinamide",
        "brand":  "Baby diary soap",
        "price":  1700,
        "image":  "images/317- Baby diary soap, Vitamin C and niacinamide, 1700naira.jpg"
    },
    {
        "id":  333,
        "name":  "Baby diary lotion, Vitamin C and niacinamide",
        "brand":  "Baby diary lotion",
        "price":  3700,
        "image":  "images/318- Baby diary lotion, Vitamin C and niacinamide, 3700naira.jpg"
    },
    {
        "id":  334,
        "name":  "Baby diary lotion, Chamomile and strawberry",
        "brand":  "Baby diary lotion",
        "price":  5500,
        "image":  "images/319- Baby diary lotion, Chamomile and strawberry, 5500naira.jpg"
    },
    {
        "id":  335,
        "name":  "Baby diary lotion, goat milk and honey",
        "brand":  "Baby diary lotion",
        "price":  5500,
        "image":  "images/320- Baby diary lotion, goat milk and honey, 5500naira.jpg"
    },
    {
        "id":  336,
        "name":  "Baby diary lotion, apple and pearl",
        "brand":  "Baby diary lotion",
        "price":  5500,
        "image":  "images/321- Baby diary lotion, apple and pearl, 5500naira.jpg"
    },
    {
        "id":  337,
        "name":  "Baby diary lotion, amino acid and blue berry",
        "brand":  "Baby diary lotion",
        "price":  5500,
        "image":  "images/322- Baby diary lotion, amino acid and blue berry, 5500naira.jpg"
    },
    {
        "id":  338,
        "name":  "Baby organic lotion, Rice milk and pearl",
        "brand":  "Baby organic lotion",
        "price":  7500,
        "image":  "images/323- Baby organic lotion, Rice milk and pearl, 7500naira.jpg"
    },
    {
        "id":  339,
        "name":  "Baby organic shower, apple and honey",
        "brand":  "Baby organic shower",
        "price":  7500,
        "image":  "images/324- Baby organic shower, apple and honey, 7500naira.jpg"
    },
    {
        "id":  340,
        "name":  "Baby organic shower, Licorice and amino acid",
        "brand":  "Baby organic shower",
        "price":  7500,
        "image":  "images/325- Baby organic shower, Licorice and amino acid, 7500naira.jpg"
    },
    {
        "id":  341,
        "name":  "Baby organic shower, Vitamin C and orange",
        "brand":  "Baby organic shower",
        "price":  7500,
        "image":  "images/326- Baby organic shower, Vitamin C and orange, 7500naira.jpg"
    },
    {
        "id":  342,
        "name":  "Baby organic shower, Rice milk and pearl",
        "brand":  "Baby organic shower",
        "price":  7500,
        "image":  "images/327- Baby organic shower, Rice milk and pearl, 7500naira.jpg"
    },
    {
        "id":  343,
        "name":  "Lanoline baby glow oil",
        "brand":  "Lanoline",
        "price":  3450,
        "image":  "images/328- Lanoline baby glow oil, 3450naira.jpg"
    },
    {
        "id":  344,
        "name":  "Lanoline baby glow soap",
        "brand":  "Lanoline",
        "price":  1750,
        "image":  "images/329- Lanoline baby glow soap, 1750naira.jpg"
    },
    {
        "id":  345,
        "name":  "Baby organic fair child powder",
        "brand":  "Baby",
        "price":  3700,
        "image":  "images/330- Baby organic fair child powder, 3700naira.jpg"
    },
    {
        "id":  346,
        "name":  "Lanoline baby soap, honey apple soap",
        "brand":  "Lanoline baby soap",
        "price":  3450,
        "image":  "images/331- Lanoline baby soap, honey apple soap, 3450naira.jpg"
    },
    {
        "id":  347,
        "name":  "Baby organic shower, Rice milk and pearl",
        "brand":  "Baby organic shower",
        "price":  7500,
        "image":  "images/332- Baby organic shower, Rice milk and pearl, 7500naira.jpg"
    },
    {
        "id":  348,
        "name":  "Baby organics powder, fair child",
        "brand":  "Baby organics powder",
        "price":  3700,
        "image":  "images/333- Baby organics powder, fair child, 3700naira.jpg"
    },
    {
        "id":  349,
        "name":  "Lanoline baby glow lotion, lanolin and niacinamide lotion",
        "brand":  "Lanoline baby glow lotion",
        "price":  7500,
        "image":  "images/334- Lanoline baby glow lotion, lanolin and niacinamide lotion 7500naira.jpg"
    },
    {
        "id":  350,
        "name":  "Lanoline baby glow lotion, shea and cocoa lotion",
        "brand":  "Lanoline baby glow lotion",
        "price":  7500,
        "image":  "images/335- Lanoline baby glow lotion, shea and cocoa lotion 7500naira.jpg"
    },
    {
        "id":  351,
        "name":  "Lanoline baby glow lotion, honey apple lotion",
        "brand":  "Lanoline baby glow lotion",
        "price":  7500,
        "image":  "images/336- Lanoline baby glow lotion, honey apple lotion 7500naira.jpg"
    },
    {
        "id":  352,
        "name":  "Lanoline baby glow lotion, vitamin c and chamomine lotion",
        "brand":  "Lanoline baby glow lotion",
        "price":  7500,
        "image":  "images/337- Lanoline baby glow lotion, vitamin c and chamomine lotion 7500naira.jpg"
    },
    {
        "id":  353,
        "name":  "Lanoline baby glow wash, vanilla oat meal wash",
        "brand":  "Lanoline baby glow wash",
        "price":  7500,
        "image":  "images/338- Lanoline baby glow wash, vanilla oat meal wash, 7500naira.jpg"
    },
    {
        "id":  354,
        "name":  "Lanoline baby glow wash, shea and cocoa wash",
        "brand":  "Lanoline baby glow wash",
        "price":  7500,
        "image":  "images/339- Lanoline baby glow wash, shea and cocoa wash, 7500naira.jpg"
    },
    {
        "id":  355,
        "name":  "Lanoline baby glow wash, almond and neem oil gel wash",
        "brand":  "Lanoline baby glow wash",
        "price":  7500,
        "image":  "images/340- Lanoline baby glow wash, almond and neem oil gel wash, 7500naira.jpg"
    },
    {
        "id":  356,
        "name":  "Carefree cotton feel normal",
        "brand":  "Carefree",
        "price":  3000,
        "image":  "images/341- Carefree cotton feel normal, 3000naira.jpg"
    },
    {
        "id":  357,
        "name":  "Dr Rashel, baby massage oil",
        "brand":  "Dr Rashel",
        "price":  3700,
        "image":  "images/342- Dr Rashel, baby massage oil, 3700naira.jpg"
    },
    {
        "id":  358,
        "name":  "Air wick essential oil, crisp cotton and peony",
        "brand":  "Air wick essential oil",
        "price":  6500,
        "image":  "images/343- Air wick essential oil, crisp cotton and peony, 6500naira.jpg"
    },
    {
        "id":  359,
        "name":  "Air wick essential oil, Amber rose",
        "brand":  "Air wick essential oil",
        "price":  6500,
        "image":  "images/344- Air wick essential oil, Amber rose, 6500naira.jpg"
    },
    {
        "id":  360,
        "name":  "Air wick essential oil, Raspberry and vanila rose",
        "brand":  "Air wick essential oil",
        "price":  6500,
        "image":  "images/345- Air wick essential oil, Raspberry and vanila rose, 6500naira.jpg"
    },
    {
        "id":  361,
        "name":  "Air wick essential oil, pacific paradise",
        "brand":  "Air wick essential oil",
        "price":  6500,
        "image":  "images/346- Air wick essential oil, pacific paradise, 6500naira.jpg"
    },
    {
        "id":  362,
        "name":  "Ultrex, pantyliners",
        "brand":  "Ultrex",
        "price":  1250,
        "image":  "images/347- Ultrex, pantyliners, 1250naira.jpg"
    },
    {
        "id":  363,
        "name":  "Moisturising lip balm, aleo vera",
        "brand":  "Moisturising lip balm",
        "price":  1200,
        "image":  "images/348- Moisturising lip balm, aleo vera,1200naira.jpg"
    },
    {
        "id":  364,
        "name":  "Moisturising lip balm, coconut",
        "brand":  "Moisturising lip balm",
        "price":  1200,
        "image":  "images/348- Moisturising lip balm, coconut,1200naira.jpg"
    },
    {
        "id":  365,
        "name":  "Moisturising lip balm, pearl shine",
        "brand":  "Moisturising lip balm",
        "price":  1200,
        "image":  "images/349- Moisturising lip balm, pearl shine,1200naira.jpg"
    },
    {
        "id":  366,
        "name":  "Moisturising lip balm, original",
        "brand":  "Moisturising lip balm",
        "price":  1200,
        "image":  "images/350- Moisturising lip balm, original,1200naira.jpg"
    },
    {
        "id":  367,
        "name":  "Glow on wash, anti aging herbal 7days whitening",
        "brand":  "Glow on wash",
        "price":  8000,
        "image":  "images/351- Glow on wash, anti aging herbal 7days whitening, 8000naira.jpg"
    },
    {
        "id":  368,
        "name":  "Nadinola secret, ceramide lotion",
        "brand":  "Nadinola secret",
        "price":  6000,
        "image":  "images/352- Nadinola secret, ceramide lotion, 6000naira.jpg"
    },
    {
        "id":  369,
        "name":  "Nadinola secret, niacinamide lotion",
        "brand":  "Nadinola secret",
        "price":  6000,
        "image":  "images/353- Nadinola secret, niacinamide lotion, 6000naira.jpg"
    },
    {
        "id":  370,
        "name":  "Glow on, Bright and clear lotion",
        "brand":  "Glow on",
        "price":  8000,
        "image":  "images/354- Glow on, Bright and clear lotion 8000naira.jpg"
    },
    {
        "id":  371,
        "name":  "Glow on, Whitening and spot removing repair cream",
        "brand":  "Glow on",
        "price":  7700,
        "image":  "images/355- Glow on, Whitening and spot removing repair cream, 7700naira.jpg"
    },
    {
        "id":  372,
        "name":  "Glow on, Whitening and spot removing serum",
        "brand":  "Glow on",
        "price":  7700,
        "image":  "images/356- Glow on, Whitening and spot removing serum, 7700naira.jpg"
    },
    {
        "id":  373,
        "name":  "Ayirah Gold, Tumeric and honey lightening soap",
        "brand":  "Ayirah Gold",
        "price":  2400,
        "image":  "images/357- Ayirah Gold, Tumeric and honey lightening soap, 2400naira.jpg"
    },
    {
        "id":  374,
        "name":  "Ayirah Gold, Exforliating lightening soap",
        "brand":  "Ayirah Gold",
        "price":  2400,
        "image":  "images/358- Ayirah Gold, Exforliating lightening soap, 2400naira.jpg"
    },
    {
        "id":  375,
        "name":  "Glow on, SPF  50 face cream",
        "brand":  "Glow on",
        "price":  7700,
        "image":  "images/359- Glow on, SPF  50 face cream, 7700naira.jpg"
    },
    {
        "id":  376,
        "name":  "Nadinola secret, Glow on",
        "brand":  "Nadinola secret",
        "price":  6000,
        "image":  "images/360- Nadinola secret, Glow on, 6000naira.jpg"
    },
    {
        "id":  377,
        "name":  "Glow on, SPF  50 sunscreen",
        "brand":  "Glow on",
        "price":  6000,
        "image":  "images/361- Glow on, SPF  50 sunscreen, 6000naira.jpg"
    },
    {
        "id":  378,
        "name":  "Nadinola  secret, Glow on oil",
        "brand":  "Nadinola  secret",
        "price":  6000,
        "image":  "images/362- Nadinola  secret, Glow on oil, 6000naira.jpg"
    },
    {
        "id":  379,
        "name":  "Ayirah gold, Tumeric and honey shower gel",
        "brand":  "Ayirah gold",
        "price":  9000,
        "image":  "images/363- Ayirah gold, Tumeric and honey shower gel,  9000naira.jpg"
    },
    {
        "id":  380,
        "name":  "Ayirah gold, Skin brightening shower gel",
        "brand":  "Ayirah gold",
        "price":  9000,
        "image":  "images/364- Ayirah gold, Skin brightening shower gel,  9000naira.jpg"
    },
    {
        "id":  381,
        "name":  "Ayirah gold, VitaminC skin brightening shower scrub",
        "brand":  "Ayirah gold",
        "price":  9000,
        "image":  "images/365- Ayirah gold, VitaminC skin brightening shower scrub,  9000naira.jpg"
    },
    {
        "id":  382,
        "name":  "Ayirah gold, Half cast shower gel",
        "brand":  "Ayirah gold",
        "price":  9000,
        "image":  "images/366- Ayirah gold, Half cast shower gel,  9000naira.jpg"
    },
    {
        "id":  383,
        "name":  "Ayirah gold, Gold whitening body milk",
        "brand":  "Ayirah gold",
        "price":  9000,
        "image":  "images/367- Ayirah gold, Gold whitening body milk, 9000naira.jpg"
    },
    {
        "id":  384,
        "name":  "Ayirah gold, Halfcast whitening body milk",
        "brand":  "Ayirah gold",
        "price":  9000,
        "image":  "images/367- Ayirah gold, Halfcast whitening body milk, 9000naira.jpg"
    },
    {
        "id":  385,
        "name":  "Ayirah gold, VitaminC whitening body milk",
        "brand":  "Ayirah gold",
        "price":  9000,
        "image":  "images/368- Ayirah gold, VitaminC whitening body milk, 9000naira.jpg"
    },
    {
        "id":  386,
        "name":  "Ayirah gold, Carrot whitening body milk",
        "brand":  "Ayirah gold",
        "price":  9000,
        "image":  "images/369- Ayirah gold, Carrot whitening body milk, 9000naira.jpg"
    },
    {
        "id":  387,
        "name":  "Ayirah gold, Alpha face and body repairing oil",
        "brand":  "Ayirah gold",
        "price":  3500,
        "image":  "images/370- Ayirah gold, Alpha face and body repairing oil, 3500naira.jpg"
    },
    {
        "id":  388,
        "name":  "Ayirah gold, Vitamin c and retinol remove black spots",
        "brand":  "Ayirah gold",
        "price":  4900,
        "image":  "images/370- Ayirah gold, Vitamin c and retinol remove black spots, 4900naira.jpg"
    },
    {
        "id":  389,
        "name":  "Ayirah gold, AHA face and body repairing oil",
        "brand":  "Ayirah gold",
        "price":  3500,
        "image":  "images/371- Ayirah gold, AHA face and body repairing oil, 3500naira.jpg"
    },
    {
        "id":  390,
        "name":  "Ayirah gold, Tumeric oil",
        "brand":  "Ayirah gold",
        "price":  4900,
        "image":  "images/372- Ayirah gold, Tumeric oil, 4900naira.jpg"
    },
    {
        "id":  391,
        "name":  "Ayirah gold, VitaminC  face and body repairing oil",
        "brand":  "Ayirah gold",
        "price":  3500,
        "image":  "images/373- Ayirah gold, VitaminC  face and body repairing oil, 3500naira.jpg"
    },
    {
        "id":  392,
        "name":  "Ayirah gold, Snail white body corrector glowing oil",
        "brand":  "Ayirah gold",
        "price":  4900,
        "image":  "images/374- Ayirah gold, Snail white body corrector glowing oil, 4900naira.jpg"
    },
    {
        "id":  393,
        "name":  "Ayirah gold, Niacinamide and hyaluronic acid 2in1 oil",
        "brand":  "Ayirah gold",
        "price":  4900,
        "image":  "images/375- Ayirah gold, Niacinamide and hyaluronic acid 2in1 oil, 4900naira.jpg"
    },
    {
        "id":  394,
        "name":  "Ayirah gold, Chamomile and citrus juice oil",
        "brand":  "Ayirah gold",
        "price":  4900,
        "image":  "images/376- Ayirah gold, Chamomile and citrus juice oil, 4900naira.jpg"
    },
    {
        "id":  395,
        "name":  "Ayirah gold, Vitamin c and retinol",
        "brand":  "Ayirah gold",
        "price":  4900,
        "image":  "images/377- Ayirah gold, Vitamin c and retinol , 4900naira.jpg"
    },
    {
        "id":  396,
        "name":  "Ayirah gold, whitening care oil",
        "brand":  "Ayirah gold",
        "price":  4900,
        "image":  "images/378- Ayirah gold, whitening care oil, 4900naira.jpg"
    },
    {
        "id":  397,
        "name":  "Ayirah gold, Tumeric oil skin whitening",
        "brand":  "Ayirah gold",
        "price":  4900,
        "image":  "images/379- Ayirah gold, Tumeric oil skin whitening, 4900naira.jpg"
    },
    {
        "id":  398,
        "name":  "Ayirah gold, Snail white body corrector glowing oil",
        "brand":  "Ayirah gold",
        "price":  4900,
        "image":  "images/380- Ayirah gold, Snail white body corrector glowing oil, 4900naira.jpg"
    },
    {
        "id":  399,
        "name":  "Facefacts, menaupause skincare",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/381- Facefacts, menaupause skincare 4500naira.jpg"
    },
    {
        "id":  400,
        "name":  "dentalaux complex 5, Teeth",
        "brand":  "dentalaux complex 5",
        "price":  1300,
        "image":  "images/1- dentalaux complex 5, Teeth, 1300naira.jpg"
    },
    {
        "id":  401,
        "name":  "dentalaux complex 5, Teeth",
        "brand":  "dentalaux complex 5",
        "price":  1300,
        "image":  "images/2- dentalaux complex 5, Teeth, 1300naira.jpg"
    },
    {
        "id":  402,
        "name":  "dentalaux charcoal withening tooth brush",
        "brand":  "dentalaux",
        "price":  1500,
        "image":  "images/3- dentalaux charcoal withening tooth brush 1500naira.jpg"
    },
    {
        "id":  403,
        "name":  "dentalaux charcoal whiteninng toothpaste",
        "brand":  "dentalaux",
        "price":  1300,
        "image":  "images/4- dentalaux charcoal whiteninng toothpaste 1300naira.jpg"
    },
    {
        "id":  404,
        "name":  "dentalaux, smile smile crocodile mild mint flavor , Teeth",
        "brand":  "dentalaux",
        "price":  1100,
        "image":  "images/5- dentalaux, smile smile crocodile mild mint flavor , Teeth, 1100naira.jpg"
    },
    {
        "id":  405,
        "name":  "dentalaux, smile smile crocodile strawberry for teeth",
        "brand":  "dentalaux",
        "price":  1100,
        "image":  "images/6- dentalaux, smile smile crocodile strawberry for teeth, 1100naira.jpg"
    },
    {
        "id":  406,
        "name":  "pretty fresh mouth spray",
        "brand":  "pretty",
        "price":  32000,
        "image":  "images/7- pretty fresh mouth spray 32,000naira.jpg"
    },
    {
        "id":  407,
        "name":  "dentalaux smile smile crocodile, bubble blast flavor for teeth",
        "brand":  "dentalaux smile smile crocodile",
        "price":  1100,
        "image":  "images/8- dentalaux smile smile crocodile, bubble blast flavor for teeth, 1100naira.jpg"
    },
    {
        "id":  408,
        "name":  "Medex Breath freshining spray",
        "brand":  "Medex",
        "price":  22000,
        "image":  "images/9- Medex Breath freshining spray 22,000naira.jpg"
    },
    {
        "id":  409,
        "name":  "Pampered, Stretch Mark Oil",
        "brand":  "Pampered",
        "price":  1500,
        "image":  "images/10- Pampered, Stretch Mark Oil 1500naira.jpg"
    },
    {
        "id":  410,
        "name":  "Sejem Denture Cleansing Toothpaste",
        "brand":  "Sejem",
        "price":  1200,
        "image":  "images/11- Sejem Denture Cleansing Toothpaste 1200naira.jpg"
    },
    {
        "id":  411,
        "name":  "lidercare antimicrobial peptide toothpaste",
        "brand":  "lidercare",
        "price":  1200,
        "image":  "images/12- lidercare antimicrobial peptide toothpaste 1200naira.jpg"
    },
    {
        "id":  412,
        "name":  "colgate fresh gel, for teeth",
        "brand":  "colgate fresh gel",
        "price":  1250,
        "image":  "images/13- colgate fresh gel, for teeth, 1250naira.jpg"
    },
    {
        "id":  413,
        "name":  "coolwhite, for teeth",
        "brand":  "coolwhite",
        "price":  1300,
        "image":  "images/14- coolwhite, for teeth, 1300naira.jpg"
    },
    {
        "id":  414,
        "name":  "mint tartar,  control whitening for teeth",
        "brand":  "mint tartar",
        "price":  2300,
        "image":  "images/15- mint tartar,  control whitening for teeth, 2300naira.jpg"
    },
    {
        "id":  415,
        "name":  "yellow tartar, control whitening, for teeth",
        "brand":  "yellow tartar",
        "price":  2300,
        "image":  "images/16- yellow tartar, control whitening, for teeth,  2300naira.jpg"
    },
    {
        "id":  416,
        "name":  "purple tartar, control whitening,for teeth",
        "brand":  "purple tartar",
        "price":  2300,
        "image":  "images/17- purple tartar, control whitening,for teeth, 2300naira.jpg"
    },
    {
        "id":  417,
        "name":  "coolwhite tootbrush",
        "brand":  "coolwhite",
        "price":  800,
        "image":  "images/18- coolwhite tootbrush 800naira.jpg"
    },
    {
        "id":  418,
        "name":  "macleans, fresh mint for teeth",
        "brand":  "macleans",
        "price":  2000,
        "image":  "images/19- macleans, fresh mint for teeth, 2000naira.jpg"
    },
    {
        "id":  419,
        "name":  "cleansing charcoal toothpaste",
        "brand":  "cleansing",
        "price":  2000,
        "image":  "images/20- cleansing charcoal toothpaste 2000naira.jpg"
    },
    {
        "id":  420,
        "name":  "tropical bliss, body butter",
        "brand":  "tropical bliss",
        "price":  5000,
        "image":  "images/21- tropical bliss, body butter 5000naira.jpg"
    },
    {
        "id":  421,
        "name":  "plum passion, body butter",
        "brand":  "plum passion",
        "price":  5000,
        "image":  "images/22- plum passion, body butter 5000naira.jpg"
    },
    {
        "id":  422,
        "name":  "strawberry fizz, body butter",
        "brand":  "strawberry fizz",
        "price":  5000,
        "image":  "images/23- strawberry fizz, body butter 5000naira.jpg"
    },
    {
        "id":  423,
        "name":  "sugar body, scrub",
        "brand":  "sugar body",
        "price":  5000,
        "image":  "images/24- sugar body, scrub 5000naira.jpg"
    },
    {
        "id":  424,
        "name":  "minty fresh, peppermint foot scrub",
        "brand":  "minty fresh",
        "price":  5000,
        "image":  "images/25- minty fresh, peppermint foot scrub 5000naira.jpg"
    },
    {
        "id":  425,
        "name":  "lemon swirl, body scrub",
        "brand":  "lemon swirl",
        "price":  5000,
        "image":  "images/26- lemon swirl, body scrub 5000naira.jpg"
    },
    {
        "id":  426,
        "name":  "brown sugar, body scrub",
        "brand":  "brown sugar",
        "price":  5000,
        "image":  "images/27- brown sugar, body scrub 5000naira.jpg"
    },
    {
        "id":  427,
        "name":  "kiwi paradise, body scrub",
        "brand":  "kiwi paradise",
        "price":  5000,
        "image":  "images/28- kiwi paradise, body scrub 5000naira.jpg"
    },
    {
        "id":  428,
        "name":  "watermelon, sugar body scrub",
        "brand":  "watermelon",
        "price":  5000,
        "image":  "images/29- watermelon, sugar body scrub 5000naira.jpg"
    },
    {
        "id":  429,
        "name":  "Facefacts, ceramide blemish treatment gel",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/30-  Facefacts, ceramide blemish treatment gel 3000naira.jpg"
    },
    {
        "id":  430,
        "name":  "Facefacts, ceramide moisturing cream",
        "brand":  "Facefacts",
        "price":  5500,
        "image":  "images/31- Facefacts, ceramide moisturing cream 5000naira.jpg"
    },
    {
        "id":  431,
        "name":  "Facefacts, ceramide replenishing eye cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/32- Facefacts, ceramide replenishing eye cream 3000naira.jpg"
    },
    {
        "id":  432,
        "name":  "Facefacts, ceramide oil control moisturizing gel cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/33- Facefacts, ceramide oil control moisturizing gel cream 3000naira.jpg"
    },
    {
        "id":  433,
        "name":  "Facefacts, ceramide repairing serum cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/34- Facefacts, ceramide repairing serum cream 3000naira.jpg"
    },
    {
        "id":  434,
        "name":  "Facefacts, ceramide blemish gel moisturizer",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/35- Facefacts, ceramide blemish gel moisturizer 3000naira.jpg"
    },
    {
        "id":  435,
        "name":  "Facefacts, ceramide blemish and defend gift set",
        "brand":  "Facefacts",
        "price":  21000,
        "image":  "images/36- Facefacts, ceramide blemish and defend gift set 21000naira.jpg"
    },
    {
        "id":  436,
        "name":  "Facefacts, brightening iiluminate vitamin c serum",
        "brand":  "Facefacts",
        "price":  5200,
        "image":  "images/37-  Facefacts, brightening iiluminate vitamin c serum 5200naira.jpg"
    },
    {
        "id":  437,
        "name":  "Facefacts, soothe glow niacinamide serum",
        "brand":  "Facefacts",
        "price":  3500,
        "image":  "images/38- Facefacts, soothe glow niacinamide serum 3500naira.jpg"
    },
    {
        "id":  438,
        "name":  "Facefacts, soothe glow niacinamide serum",
        "brand":  "Facefacts",
        "price":  3200,
        "image":  "images/39- Facefacts, soothe glow niacinamide serum 3200naira.jpg"
    },
    {
        "id":  439,
        "name":  "Facefacts, cica boost",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/40- Facefacts, cica boost 5000naira.jpg"
    },
    {
        "id":  440,
        "name":  "Facefacts, firm revitalise collagen serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/41- Facefacts, firm revitalise collagen serum 3000naira.jpg"
    },
    {
        "id":  441,
        "name":  "Facefacts, restore clarify salicylic acid",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/42- Facefacts, restore clarify salicylic acid 3000naira.jpg"
    },
    {
        "id":  442,
        "name":  "Facefacts, revive brightning caffeine serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/43- Facefacts, revive brightning caffeine serum 3000naira.jpg"
    },
    {
        "id":  443,
        "name":  "Facefacts, firm revitalise polypeptide serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/44- Facefacts, firm revitalise polypeptide serum 3000naira.jpg"
    }
    

];
const state = {
  search: "",
  category: "all",
  sort: "featured",
  currentPage: 1,
  pageSize: 30,
  cart: new Map(),
  cartToastTimer: null,
  heroIndex: 0,
  heroTimer: null
};
const el = {
  grid: document.getElementById("product-grid"),
  resultCount: document.getElementById("result-count"),
  search: document.getElementById("search"),
  category: document.getElementById("category-filter"),
  sort: document.getElementById("sort-filter"),
  cartToggle: document.getElementById("cart-toggle"),
  cartClose: document.getElementById("cart-close"),
  cartPanel: document.getElementById("cart-panel"),
  cartItems: document.getElementById("cart-items"),
  cartTotal: document.getElementById("cart-total"),
  cartCount: document.getElementById("cart-count"),
  checkout: document.getElementById("checkout-btn"),
  clearCart: document.getElementById("clear-cart"),
  heroImage: document.getElementById("hero-image"),
  heroTitle: document.getElementById("hero-title"),
  heroCaption: document.getElementById("hero-caption"),
  heroDots: document.getElementById("hero-dots"),
  pagination: document.getElementById("pagination"),
  prevPage: document.getElementById("prev-page"),
  nextPage: document.getElementById("next-page"),
  pageLabel: document.getElementById("page-label"),
  cartToast: document.getElementById("cart-toast")
};
function formatNaira(value) {
  return "N" + Number(value || 0).toLocaleString("en-NG");
}
function safeImageUrl(relativePath) {
  try {
    return new URL(encodeURI(relativePath), window.location.href).href;
  } catch {
    return relativePath;
  }
}
function showCartToast(message) {
  if (!el.cartToast) return;
  el.cartToast.textContent = message;
  el.cartToast.classList.add("show");
  if (state.cartToastTimer) clearTimeout(state.cartToastTimer);
  state.cartToastTimer = setTimeout(function () {
    el.cartToast.classList.remove("show");
  }, 1800);
}
function categorize(name) {
  const n = name.toLowerCase();
  if (/(tooth|teeth|mouth spray|tootbrush|toothpaste|denture)/.test(n)) return "Oral Care";
  if (/(baby|child)/.test(n)) return "Baby Care";
  if (/(perfume|air wick|axe|fragrance)/.test(n)) return "Fragrance";
  if (/(lip balm|lip oil|lip scrub|lip)/.test(n)) return "Lip Care";
  if (/(scrub|mask|patch|patches|wipes|pore strips|peel off|eye patches)/.test(n)) return "Treatments and Exfoliants";
  if (/(serum|oil|toner|mist)/.test(n)) return "Serums Oils and Toners";
  if (/(soap|cream bar|bar)/.test(n)) return "Soaps and Bars";
  if (/(wash|cleanser|cleansing|foam|shower|bath|intimate wash|gel cleanser)/.test(n)) return "Cleansers and Washes";
  if (/(lotion|cream|moisturiser|moisturizer|body milk|body butter|gel cream)/.test(n)) return "Lotions and Creams";
  return "Skincare Essentials";
}
for (let i = 0; i < products.length; i += 1) {
  products[i].category = categorize(products[i].name);
  products[i].price = Number(products[i].price) || 0;
}
const heroSlides = [
  {
    image: "images/hero1.webp",
    title: "Premium skincare for every glow goal",
    caption: "Shop trusted cleansers, serums, masks, body care, and essentials in one place."
  },
  {
    image: "images/hero2.webp",
    title: "Facefacts-inspired beauty collection",
    caption: "Discover best-selling skincare lines, curated for bright, healthy, smooth skin."
  },
  {
    image: "images/hero3.jpg",
    title: "Checkout in seconds on WhatsApp",
    caption: "Add your products, review your cart, and send your complete order instantly."
  }
];
function setupHeroSlider() {
  if (!el.heroImage || !el.heroDots || !el.heroTitle || !el.heroCaption) return;
  el.heroDots.innerHTML = heroSlides.map(function (_, i) {
    return "<button class=\"hero-dot\" type=\"button\" data-hero-index=\"" + i + "\"></button>";
  }).join("");
  function renderHero() {
    const slide = heroSlides[state.heroIndex];
    el.heroImage.src = encodeURI(slide.image);
    el.heroTitle.textContent = slide.title;
    el.heroCaption.textContent = slide.caption;
    const dots = el.heroDots.querySelectorAll(".hero-dot");
    for (let i = 0; i < dots.length; i += 1) {
      dots[i].classList.toggle("active", i === state.heroIndex);
    }
  }
  el.heroDots.addEventListener("click", function (e) {
    const btn = e.target.closest("button[data-hero-index]");
    if (!btn) return;
    state.heroIndex = Number(btn.dataset.heroIndex);
    renderHero();
  });
  renderHero();
  if (state.heroTimer) clearInterval(state.heroTimer);
  state.heroTimer = setInterval(function () {
    state.heroIndex = (state.heroIndex + 1) % heroSlides.length;
    renderHero();
  }, 3800);
}
function getFilteredProducts() {
  const q = state.search.trim().toLowerCase();
  let list = products.filter(function (p) {
    const matchesCategory = state.category === "all" || p.category === state.category;
    const hay = (p.name + " " + p.brand + " " + p.category).toLowerCase();
    const matchesSearch = !q || hay.includes(q);
    return matchesCategory && matchesSearch;
  });
  switch (state.sort) {
    case "price-asc":
      list = list.sort(function (a, b) { return a.price - b.price; });
      break;
    case "price-desc":
      list = list.sort(function (a, b) { return b.price - a.price; });
      break;
    case "name-asc":
      list = list.sort(function (a, b) { return a.name.localeCompare(b.name); });
      break;
    default:
      list = list.sort(function (a, b) { return a.id - b.id; });
  }
  return list;
}
function getPageData(list) {
  const paginate = state.category === "all";
  if (!paginate) {
    return {
      items: list,
      totalPages: 1,
      startIndex: list.length ? 1 : 0,
      endIndex: list.length
    };
  }
  const totalPages = Math.max(1, Math.ceil(list.length / state.pageSize));
  if (state.currentPage > totalPages) state.currentPage = totalPages;
  if (state.currentPage < 1) state.currentPage = 1;
  const start = (state.currentPage - 1) * state.pageSize;
  const end = start + state.pageSize;
  return {
    items: list.slice(start, end),
    totalPages: totalPages,
    startIndex: list.length ? start + 1 : 0,
    endIndex: Math.min(end, list.length)
  };
}
function renderPagination(totalPages) {
  if (!el.pagination || !el.prevPage || !el.nextPage || !el.pageLabel) return;
  const shouldShow = state.category === "all";
  el.pagination.style.display = shouldShow ? "flex" : "none";
  if (!shouldShow) return;
  el.pageLabel.textContent = "Page " + state.currentPage + " of " + totalPages;
  el.prevPage.disabled = state.currentPage <= 1;
  el.nextPage.disabled = state.currentPage >= totalPages;
}
function renderProducts() {
  const filtered = getFilteredProducts();
  const pageData = getPageData(filtered);
  const list = pageData.items;
  el.resultCount.textContent = "Showing " + pageData.startIndex + "-" + pageData.endIndex + " of " + filtered.length + " products";
  el.grid.innerHTML = list.map(function (p) {
    return "<article class=\"card\">" +
      "<img src=\"" + encodeURI(p.image) + "\" alt=\"" + p.name + "\" loading=\"lazy\" />" +
      "<div class=\"card-body\">" +
      "<p class=\"brand\">" + p.brand + "</p>" +
      "<h3 class=\"title\">" + p.name + "</h3>" +
      "<p class=\"meta\">" + p.category + "</p>" +
      "<div class=\"price-row\">" +
      "<span class=\"price\">" + formatNaira(p.price) + "</span>" +
      "<button class=\"add-btn\" data-id=\"" + p.id + "\">Add to Cart</button>" +
      "</div>" +
      "</div>" +
      "</article>";
  }).join("");
  renderPagination(pageData.totalPages);
}
function buildCategoryOptions() {
  const categories = Array.from(new Set(products.map(function (p) { return p.category; }))).sort(function (a, b) {
    return a.localeCompare(b);
  });
  categories.forEach(function (c) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    el.category.appendChild(opt);
  });
}
function cartArray() {
  return Array.from(state.cart.values());
}
function updateCartCounters() {
  const items = cartArray();
  const count = items.reduce(function (n, i) { return n + i.qty; }, 0);
  const total = items.reduce(function (n, i) { return n + (i.price * i.qty); }, 0);
  el.cartCount.textContent = String(count);
  el.cartTotal.textContent = formatNaira(total);
}
function renderCart() {
  const items = cartArray();
  if (!items.length) {
    el.cartItems.innerHTML = "<p>Your cart is empty.</p>";
    updateCartCounters();
    return;
  }
  el.cartItems.innerHTML = items.map(function (item) {
    return "<div class=\"cart-item\">" +
      "<img src=\"" + encodeURI(item.image) + "\" alt=\"" + item.name + "\" />" +
      "<div>" +
      "<p class=\"title\">" + item.name + "</p>" +
      "<p class=\"meta\">" + formatNaira(item.price) + " each</p>" +
      "<div class=\"qty-wrap\">" +
      "<button class=\"qty-btn\" data-action=\"dec\" data-id=\"" + item.id + "\">-</button>" +
      "<span>" + item.qty + "</span>" +
      "<button class=\"qty-btn\" data-action=\"inc\" data-id=\"" + item.id + "\">+</button>" +
      "</div>" +
      "</div>" +
      "<div>" +
      "<p class=\"price\">" + formatNaira(item.price * item.qty) + "</p>" +
      "<button class=\"add-btn\" data-action=\"remove\" data-id=\"" + item.id + "\">Remove</button>" +
      "</div>" +
      "</div>";
  }).join("");
  updateCartCounters();
}
function addToCart(id) {
  const product = products.find(function (p) { return p.id === id; });
  if (!product) return;
  if (state.cart.has(id)) {
    state.cart.get(id).qty += 1;
  } else {
    state.cart.set(id, Object.assign({}, product, { qty: 1 }));
  }
  renderCart();
  showCartToast(product.name + " added to cart.");
}
function changeQty(id, action) {
  if (!state.cart.has(id)) return;
  const item = state.cart.get(id);
  if (action === "inc") item.qty += 1;
  if (action === "dec") item.qty -= 1;
  if (action === "remove" || item.qty <= 0) state.cart.delete(id);
  renderCart();
}
function openCart() {
  el.cartPanel.classList.add("open");
  el.cartPanel.setAttribute("aria-hidden", "false");
}
function closeCart() {
  el.cartPanel.classList.remove("open");
  el.cartPanel.setAttribute("aria-hidden", "true");
}
function checkoutOnWhatsApp() {
  const items = cartArray();
  if (!items.length) {
    alert("Your cart is empty.");
    return;
  }
  const total = items.reduce(function (n, i) { return n + (i.price * i.qty); }, 0);
  const lines = [
    "Hello " + STORE.name + ", I want to place an order.",
    "",
    "Selected products:"
  ];
  items.forEach(function (item, index) {
    lines.push(String(index + 1) + ". " + item.name);
    lines.push("Qty: " + item.qty);
    lines.push("Unit Price: " + formatNaira(item.price));
    lines.push("Subtotal: " + formatNaira(item.price * item.qty));
    lines.push("Picture: " + safeImageUrl(item.image));
    lines.push("");
  });
  lines.push("Total: " + formatNaira(total));
  lines.push("Store Address: " + STORE.address);
  const text = encodeURIComponent(lines.join("\n"));
  const url = "https://wa.me/" + STORE.whatsapp + "?text=" + text;
  window.open(url, "_blank");
}
el.search.addEventListener("input", function (e) {
  state.search = e.target.value;
  state.currentPage = 1;
  renderProducts();
});
el.category.addEventListener("change", function (e) {
  state.category = e.target.value;
  state.currentPage = 1;
  renderProducts();
});
el.sort.addEventListener("change", function (e) {
  state.sort = e.target.value;
  state.currentPage = 1;
  renderProducts();
});
el.grid.addEventListener("click", function (e) {
  const btn = e.target.closest("button[data-id]");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  addToCart(id);
});
el.cartItems.addEventListener("click", function (e) {
  const btn = e.target.closest("button[data-action][data-id]");
  if (!btn) return;
  changeQty(Number(btn.dataset.id), btn.dataset.action);
});
if (el.prevPage) {
  el.prevPage.addEventListener("click", function () {
    if (state.currentPage > 1) {
      state.currentPage -= 1;
      renderProducts();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}
if (el.nextPage) {
  el.nextPage.addEventListener("click", function () {
    state.currentPage += 1;
    renderProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
el.cartToggle.addEventListener("click", openCart);
el.cartClose.addEventListener("click", closeCart);
el.checkout.addEventListener("click", checkoutOnWhatsApp);
el.clearCart.addEventListener("click", function () {
  state.cart.clear();
  renderCart();
});
buildCategoryOptions();
setupHeroSlider();
renderProducts();
renderCart();
