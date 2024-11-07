import getIp from "../ip";
const mockObject = {
  latitude: "55.7386",
  longitude: "37.6068",
  accuracy: 1000,
  timezone: "Europe/Moscow",
  organization: "AS57378 JSC ER-Telecom Holding",
  ip: "37.112.235.193",
  asn: 57378,
  area_code: "0",
  organization_name: "JSC ER-Telecom Holding",
  country_code: "RU",
  country_code3: "RUS",
  continent_code: "EU",
  country: "Russia",
};
global.fetch = jest.fn().mockResolvedValue(mockObject);
describe("test for getIp function", () => {
  beforeEach(async () => {
    global.fetch.mockClear();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockObject),
    });
  });
  
  test("Is a function", () => {
    expect(getIp).toBeInstanceOf(Function);
  });

  test("getIp returns promise", async () => {
    await getIp()
    expect(fetch).toHaveBeenCalledWith(`https://get.geojs.io/v1/ip/geo.json`);
    expect(await getIp()).toEqual(mockObject);
  });
});
