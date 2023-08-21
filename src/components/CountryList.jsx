/* eslint-disable react/prop-types */
import React from "react";

const CountryList = ({handleChange}) => {
  return (
    <select
      className="mb-4 w-full rounded-md bg-slate-300 p-2"
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
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Italy">
        Italy
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Jamaica"
      >
        Jamaica
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Japan">
        Japan
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Jersey"
      >
        Jersey
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Jordan"
      >
        Jordan
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Kazakhstan"
      >
        Kazakhstan
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Kenya">
        Kenya
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Kiribati"
      >
        Kiribati
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Korea, Democratic People's Republic of"
      >
        Korea, Democratic People Republic of
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Korea, Republic of"
      >
        Korea, Republic of
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Kosovo"
      >
        Kosovo
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Kuwait"
      >
        Kuwait
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Kyrgyzstan"
      >
        Kyrgyzstan
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Lao People's Democratic Republic"
      >
        Lao People Democratic Republic
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Latvia"
      >
        Latvia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Lebanon"
      >
        Lebanon
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Lesotho"
      >
        Lesotho
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Liberia"
      >
        Liberia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Libyan Arab Jamahiriya"
      >
        Libyan Arab Jamahiriya
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Liechtenstein"
      >
        Liechtenstein
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Lithuania"
      >
        Lithuania
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Luxembourg"
      >
        Luxembourg
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Macao">
        Macao
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Macedonia, the Former Yugoslav Republic of"
      >
        Macedonia, the Former Yugoslav Republic of
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Madagascar"
      >
        Madagascar
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Malawi"
      >
        Malawi
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Malaysia"
      >
        Malaysia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Maldives"
      >
        Maldives
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Mali">
        Mali
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Malta">
        Malta
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Marshall Islands"
      >
        Marshall Islands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Martinique"
      >
        Martinique
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Mauritania"
      >
        Mauritania
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Mauritius"
      >
        Mauritius
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Mayotte"
      >
        Mayotte
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Mexico"
      >
        Mexico
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Micronesia, Federated States of"
      >
        Micronesia, Federated States of
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Moldova, Republic of"
      >
        Moldova, Republic of
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Monaco"
      >
        Monaco
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Mongolia"
      >
        Mongolia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Montenegro"
      >
        Montenegro
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Montserrat"
      >
        Montserrat
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Morocco"
      >
        Morocco
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Mozambique"
      >
        Mozambique
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Myanmar"
      >
        Myanmar
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Namibia"
      >
        Namibia
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Nauru">
        Nauru
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Nepal">
        Nepal
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Netherlands"
      >
        Netherlands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Netherlands Antilles"
      >
        Netherlands Antilles
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="New Caledonia"
      >
        New Caledonia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="New Zealand"
      >
        New Zealand
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Nicaragua"
      >
        Nicaragua
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Niger">
        Niger
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Nigeria"
      >
        Nigeria
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Niue">
        Niue
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Norfolk Island"
      >
        Norfolk Island
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Northern Mariana Islands"
      >
        Northern Mariana Islands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Norway"
      >
        Norway
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Oman">
        Oman
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Pakistan"
      >
        Pakistan
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Palau">
        Palau
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Palestinian Territory, Occupied"
      >
        Palestinian Territory, Occupied
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Panama"
      >
        Panama
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Papua New Guinea"
      >
        Papua New Guinea
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Paraguay"
      >
        Paraguay
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Peru">
        Peru
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Philippines"
      >
        Philippines
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Pitcairn"
      >
        Pitcairn
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Poland"
      >
        Poland
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Portugal"
      >
        Portugal
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Puerto Rico"
      >
        Puerto Rico
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Qatar">
        Qatar
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Reunion"
      >
        Reunion
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Romania"
      >
        Romania
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Russian Federation"
      >
        Russian Federation
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Rwanda"
      >
        Rwanda
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Saint Barthelemy"
      >
        Saint Barthelemy
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Saint Helena"
      >
        Saint Helena
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Saint Kitts and Nevis"
      >
        Saint Kitts and Nevis
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Saint Lucia"
      >
        Saint Lucia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Saint Martin"
      >
        Saint Martin
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Saint Pierre and Miquelon"
      >
        Saint Pierre and Miquelon
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Saint Vincent and the Grenadines"
      >
        Saint Vincent and the Grenadines
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Samoa">
        Samoa
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="San Marino"
      >
        San Marino
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Sao Tome and Principe"
      >
        Sao Tome and Principe
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Saudi Arabia"
      >
        Saudi Arabia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Senegal"
      >
        Senegal
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Serbia"
      >
        Serbia
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Serbia and Montenegro"
      >
        Serbia and Montenegro
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Seychelles"
      >
        Seychelles
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Sierra Leone"
      >
        Sierra Leone
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Singapore"
      >
        Singapore
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Sint Maarten"
      >
        St Martin
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Slovakia"
      >
        Slovakia
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
        value="South Sudan"
      >
        South Sudan
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Spain">
        Spain
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
        value="Swaziland"
      >
        Swaziland
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Sweden"
      >
        Sweden
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Switzerland"
      >
        Switzerland
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Syrian Arab Republic"
      >
        Syrian Arab Republic
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Taiwan, Province of China"
      >
        Taiwan, Province of China
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
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Togo">
        Togo
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Tokelau"
      >
        Tokelau
      </option>
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="Tonga">
        Tonga
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
        value="Turkmenistan"
      >
        Turkmenistan
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Turks and Caicos Islands"
      >
        Turks and Caicos Islands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Tuvalu"
      >
        Tuvalu
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
        value="United States Minor Outlying Islands"
      >
        United States Minor Outlying Islands
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Uruguay"
      >
        Uruguay
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Uzbekistan"
      >
        Uzbekistan
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Vanuatu"
      >
        Vanuatu
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Venezuela"
      >
        Venezuela
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Viet Nam"
      >
        Viet Nam
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Virgin Islands, British"
      >
        Virgin Islands, British
      </option>
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value="Virgin Islands, U.s."
      >
        Virgin Islands, U.s.
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

export default CountryList;
