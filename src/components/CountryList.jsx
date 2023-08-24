/* eslint-disable react/prop-types */
import React from "react";

const CountryList = ({ handleChange }) => {
  return (
    <select
      className="mb-4 w-full rounded-md bg-slate-300 p-2 float-right
      border border-gray-300 shadow-sm pr-10 pl-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  
      bg-[linear-gradient(45deg,transparent_50%,gray_50%),linear-gradient(135deg,gray_50%,transparent_50%),linear-gradient(to_right,#ccc,#ccc)] 
      bg-[calc(100%_-_20px)_calc(1em_+_2px),calc(100%_-_15px)_calc(1em_+_2px),calc(100%_-_2.5em)_0.5em] 
      bg-[5px_5px,5px_5px,1px_1.5em] 
      bg-no-repeat appearance-none"
      id="country"
      name="country"
      onChange={(e) => handleChange("country", e.target.value)}
      required
    >
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="">
        Select Country
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Afghanistan"
      >
        Afghanistan
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Aland Islands"
      >
        Aland Islands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Albania"
      >
        Albania
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Algeria"
      >
        Algeria
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="American Samoa"
      >
        American Samoa
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Andorra"
      >
        Andorra
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Angola"
      >
        Angola
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Anguilla"
      >
        Anguilla
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Antarctica"
      >
        Antarctica
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Antigua and Barbuda"
      >
        Antigua and Barbuda
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Argentina"
      >
        Argentina
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Armenia"
      >
        Armenia
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Aruba">
        Aruba
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Australia"
      >
        Australia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Austria"
      >
        Austria
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Azerbaijan"
      >
        Azerbaijan
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Bahamas"
      >
        Bahamas
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Bahrain"
      >
        Bahrain
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Bangladesh"
      >
        Bangladesh
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Barbados"
      >
        Barbados
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Belarus"
      >
        Belarus
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Belgium"
      >
        Belgium
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Belize"
      >
        Belize
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Benin">
        Benin
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Bermuda"
      >
        Bermuda
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Bhutan"
      >
        Bhutan
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Bolivia"
      >
        Bolivia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Bonaire, Sint Eustatius and Saba"
      >
        Bonaire, Sint Eustatius and Saba
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Bosnia and Herzegovina"
      >
        Bosnia and Herzegovina
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Botswana"
      >
        Botswana
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Bouvet Island"
      >
        Bouvet Island
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Brazil"
      >
        Brazil
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="British Indian Ocean Territory"
      >
        British Indian Ocean Territory
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Brunei Darussalam"
      >
        Brunei Darussalam
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Bulgaria"
      >
        Bulgaria
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Burkina Faso"
      >
        Burkina Faso
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Burundi"
      >
        Burundi
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Cambodia"
      >
        Cambodia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Cameroon"
      >
        Cameroon
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Canada"
      >
        Canada
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Cape Verde"
      >
        Cape Verde
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Cayman Islands"
      >
        Cayman Islands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Central African Republic"
      >
        Central African Republic
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Chad">
        Chad
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Chile">
        Chile
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="China">
        China
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Christmas Island"
      >
        Christmas Island
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Cocos (Keeling) Islands"
      >
        Cocos (Keeling) Islands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Colombia"
      >
        Colombia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Comoros"
      >
        Comoros
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Congo">
        Congo
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Congo, Democratic Republic of the Congo"
      >
        Congo, Democratic Republic of the Congo
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Cook Islands"
      >
        Cook Islands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Costa Rica"
      >
        Costa Rica
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Cote D'Ivoire"
      >
        Cote D Ivoire
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Croatia"
      >
        Croatia
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Cuba">
        Cuba
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Curacao"
      >
        Curacao
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Cyprus"
      >
        Cyprus
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Czech Republic"
      >
        Czech Republic
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Denmark"
      >
        Denmark
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Djibouti"
      >
        Djibouti
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Dominica"
      >
        Dominica
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Dominican Republic"
      >
        Dominican Republic
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Ecuador"
      >
        Ecuador
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Egypt">
        Egypt
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="El Salvador"
      >
        El Salvador
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Equatorial Guinea"
      >
        Equatorial Guinea
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Eritrea"
      >
        Eritrea
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Estonia"
      >
        Estonia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Ethiopia"
      >
        Ethiopia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Falkland Islands (Malvinas)"
      >
        Falkland Islands (Malvinas)
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Faroe Islands"
      >
        Faroe Islands
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Fiji">
        Fiji
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Finland"
      >
        Finland
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="France"
      >
        France
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="French Guiana"
      >
        French Guiana
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="French Polynesia"
      >
        French Polynesia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="French Southern Territories"
      >
        French Southern Territories
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Gabon">
        Gabon
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Gambia"
      >
        Gambia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Georgia"
      >
        Georgia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Germany"
      >
        Germany
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Ghana">
        Ghana
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Gibraltar"
      >
        Gibraltar
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Greece"
      >
        Greece
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Greenland"
      >
        Greenland
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Grenada"
      >
        Grenada
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Guadeloupe"
      >
        Guadeloupe
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Guam">
        Guam
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Guatemala"
      >
        Guatemala
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Guernsey"
      >
        Guernsey
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Guinea"
      >
        Guinea
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Guinea-Bissau"
      >
        Guinea-Bissau
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Guyana"
      >
        Guyana
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Haiti">
        Haiti
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Heard Island and Mcdonald Islands"
      >
        Heard Island and McDonald Islands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Holy See (Vatican City State)"
      >
        Holy See (Vatican City State)
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Honduras"
      >
        Honduras
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Hong Kong"
      >
        Hong Kong
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Hungary"
      >
        Hungary
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Iceland"
      >
        Iceland
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="India">
        India
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Indonesia"
      >
        Indonesia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Iran, Islamic Republic of"
      >
        Iran, Islamic Republic of
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Iraq">
        Iraq
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Ireland"
      >
        Ireland
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Isle of Man"
      >
        Isle of Man
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Israel"
      >
        Israel
      </option>

      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Slovenia"
      >
        Slovenia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Solomon Islands"
      >
        Solomon Islands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Somalia"
      >
        Somalia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="South Africa"
      >
        South Africa
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="South Georgia and the South Sandwich Islands"
      >
        South Georgia and the South Sandwich Islands
      </option>

      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Sri Lanka"
      >
        Sri Lanka
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Sudan">
        Sudan
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Suriname"
      >
        Suriname
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Svalbard and Jan Mayen"
      >
        Svalbard and Jan Mayen
      </option>

      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Tajikistan"
      >
        Tajikistan
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Tanzania, United Republic of"
      >
        Tanzania, United Republic of
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Thailand"
      >
        Thailand
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Timor-Leste"
      >
        Timor-Leste
      </option>

      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Trinidad and Tobago"
      >
        Trinidad and Tobago
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Tunisia"
      >
        Tunisia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Turkey"
      >
        Turkey
      </option>

      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Uganda"
      >
        Uganda
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Ukraine"
      >
        Ukraine
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="United Arab Emirates"
      >
        United Arab Emirates
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="United Kingdom"
      >
        United Kingdom
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="United States"
      >
        United States
      </option>

      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Wallis and Futuna"
      >
        Wallis and Futuna
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Western Sahara"
      >
        Western Sahara
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Yemen">
        Yemen
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Zambia"
      >
        Zambia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Zimbabwe"
      >
        Zimbabwe
      </option>
    </select>
  );
};

export default React.memo(CountryList);
