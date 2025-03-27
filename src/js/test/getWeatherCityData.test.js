import getWeatherCityData from "../getWeatherCityData";

const get2Object = [
    {
        "name": "Moscow",
        "local_names": {
            "ht": "Moskou",
            "en": "Moscow",
            "bo": "མོ་སི་ཁོ།",
            "ug": "Moskwa",
            "fy": "Moskou",
            "sv": "Moskva",
            "tk": "Moskwa",
            "es": "Moscú",
            "fr": "Moscou",
            "mn": "Москва",
            "ay": "Mosku",
            "mt": "Moska",
            "ia": "Moscova",
            "bg": "Москва",
            "ga": "Moscó",
            "dz": "མོསི་ཀོ",
            "vo": "Moskva",
            "tr": "Moskova",
            "yo": "Mọsko",
            "kg": "Moskva",
            "sl": "Moskva",
            "la": "Moscua",
            "ku": "Moskow",
            "el": "Μόσχα",
            "pl": "Moskwa",
            "nl": "Moskou",
            "wo": "Mosku",
            "eu": "Mosku",
            "af": "Moskou",
            "sk": "Moskva",
            "az": "Moskva",
            "be": "Масква",
            "kl": "Moskva",
            "wa": "Moscou",
            "ka": "მოსკოვი",
            "dv": "މޮސްކޯ",
            "ro": "Moscova",
            "kv": "Мӧскуа",
            "fo": "Moskva",
            "tt": "Мәскәү",
            "ur": "ماسکو",
            "et": "Moskva",
            "it": "Mosca",
            "ml": "മോസ്കോ",
            "fa": "مسکو",
            "kn": "ಮಾಸ್ಕೋ",
            "cs": "Moskva",
            "jv": "Moskwa",
            "no": "Moskva",
            "sm": "Moscow",
            "is": "Moskva",
            "ja": "モスクワ",
            "da": "Moskva",
            "ie": "Moskwa",
            "su": "Moskwa",
            "sc": "Mosca",
            "nb": "Moskva",
            "nn": "Moskva",
            "zh": "莫斯科",
            "ky": "Москва",
            "ak": "Moscow",
            "ar": "موسكو",
            "gd": "Moscobha",
            "co": "Moscù",
            "io": "Moskva",
            "bn": "মস্কো",
            "ba": "Мәскәү",
            "kw": "Moskva",
            "mi": "Mohikau",
            "qu": "Moskwa",
            "ab": "Москва",
            "ps": "مسکو",
            "ascii": "Moscow",
            "ln": "Moskú",
            "am": "ሞስኮ",
            "th": "มอสโก",
            "oc": "Moscòu",
            "tg": "Маскав",
            "iu": "ᒨᔅᑯ",
            "hy": "Մոսկվա",
            "mk": "Москва",
            "uz": "Moskva",
            "sh": "Moskva",
            "he": "מוסקווה",
            "na": "Moscow",
            "li": "Moskou",
            "ko": "모스크바",
            "pt": "Moscou",
            "sr": "Москва",
            "gl": "Moscova - Москва",
            "hi": "मास्को",
            "av": "Москва",
            "ss": "Moscow",
            "ca": "Moscou",
            "ta": "மாஸ்கோ",
            "kk": "Мәскеу",
            "lt": "Maskva",
            "ce": "Москох",
            "bs": "Moskva",
            "tl": "Moscow",
            "feature_name": "Moscow",
            "st": "Moscow",
            "zu": "IMoskwa",
            "ru": "Москва",
            "vi": "Mát-xcơ-va",
            "sw": "Moscow",
            "ty": "Moscou",
            "gv": "Moscow",
            "ch": "Moscow",
            "gn": "Mosku",
            "hu": "Moszkva",
            "de": "Moskau",
            "za": "Moscow",
            "bi": "Moskow",
            "cv": "Мускав",
            "os": "Мæскуы",
            "br": "Moskov",
            "ms": "Moscow",
            "mg": "Moskva",
            "hr": "Moskva",
            "id": "Moskwa",
            "cu": "Москъва",
            "an": "Moscú",
            "cy": "Moscfa",
            "eo": "Moskvo",
            "uk": "Москва",
            "sg": "Moscow",
            "te": "మాస్కో",
            "lv": "Maskava",
            "so": "Moskow",
            "fi": "Moskova",
            "se": "Moskva",
            "yi": "מאסקווע",
            "lg": "Moosko",
            "my": "မော်စကိုမြို့",
            "sq": "Moska",
            "mr": "मॉस्को"
        },
        "lat": 55.7504461,
        "lon": 37.6174943,
        "country": "RU",
        "state": "Moscow"
    },
    {
        "name": "Moscow",
        "local_names": {
            "en": "Moscow",
            "ru": "Москва"
        },
        "lat": 46.7323875,
        "lon": -117.0001651,
        "country": "US",
        "state": "Idaho"
    },
    {
        "name": "Berkarar obasy",
        "local_names": {
            "tk": "Berkarar obasy"
        },
        "lat": 37.41866695,
        "lon": 60.42703721312893,
        "country": "TM",
        "state": "Ahal Region"
    },
    {
        "name": "Berkarar obasy",
        "local_names": {
            "tk": "Berkarar obasy"
        },
        "lat": 37.4150582,
        "lon": 60.4266397,
        "country": "TM",
        "state": "Ahal Region"
    },
    {
        "name": "Moskwa",
        "local_names": {
            "pl": "Moskwa",
            "ru": "Москва"
        },
        "lat": 51.8158099,
        "lon": 19.6573685,
        "country": "PL",
        "state": "Łódź Voivodeship"
    }
]
describe("test for getWeatherCityData function", () => {
    beforeEach(async () => {
       
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue(get2Object),
        });
      });
  test("Is a function", () => {
    expect(getWeatherCityData).toBeInstanceOf(Function);
  });

  test("return promise", async()=>{
    const result = await getWeatherCityData('Москва')
    expect(fetch).toHaveBeenCalledWith(`https://api.openweathermap.org/geo/1.0/direct?q=Москва&limit=5&appid=fd185eec875c277bc16bccdb3629b6af`);

    expect(result).toEqual(get2Object)
  })
});
