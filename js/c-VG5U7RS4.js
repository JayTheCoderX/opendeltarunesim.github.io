import { yf as L } from './c-PWNRTD7X.js';
import { p as B, q as J } from './c-SUMRYW3E.js';
import { P as n } from './c-ZQQWH6UG.js';
import { J as m, K as s, Xb as N } from './c-PBMEVLU6.js';
import { a as i, l as u } from './c-XSSGDLV7.js';
u(), u();
var f = [],
  T = {},
  E = {},
  R = new Set(["kaizo_knight"]),
  x = i(e => R.has(String(e || '').replace(/^mod_/, '')), "modBlocked"),
  h = Object.fromEntries(f.filter(e => !x(e.id)).map(e => [e.id, e])),
  H = {},
  t = {},
  M = i(e => ({
    'name': e.name,
    'version': e.version,
    'author': (e.author || []).join(',\x20'),
    'url': e.url,
    'icon': e.icon || null,
    'provenance': e.provenance,
    'provenanceNote': e.provenanceNote || '',
    'line': e.name + '\x20' + e.version + " by " + (e.author || []).join(',\x20')
  }), "modCredit"),
  w = i(e => !!H[e], "modLoaded"),
  p = i(e => e && e.mod && h[e.mod] || null, "modOf");
function U() {
  const e = ['W5NdJmkl', 'W6eLW6u2c8o8W6O', 'WQJdTSkkWRvo', 'gf0JbLm', 'xCkekfhdMG', 'W7FdIr7cJJDQWQ3cKmo5W6JdKIBdRW', "jr/cV8kZWQG", 'WPBdMmkzWQb0', 'WP7cQwNdINCWW7JdJ8okW7q', 'CColW7PTySoNtSkeW7pdSq', 'D8oUB8kWW7K', 'WOxcMNeAW4z6W7vsfKS', 'W7m8e8k7WOxcOCk7Ex3cPa', 'WR3dRSkjWQPZ', 'lGhcUCoOW6JdUG', 'e8o3W7FdL8kH', 'W5ldRCk6irjvWQ4LW4FcQW', 'lmouW4BdK8k7WOO', 'WQXkWQhcOmot', 'W7KEW4uNWQS', 'W4iOpSkW', 'W7ZcThjX', "W4/dP8kvlt4", 'WOJcLhim', 'W7pcSNG', 'sCkOh1hdO8obpmoHcCk8', "W6/cUudcQG8", 'g8k7WRtcSmka', 'W6ddVhVcRSka', 'W5SyW5Suma', 'WRn7WQlcTCon', "nXpcP8kNWRP+W78", 'mJG6hJq', 'vSowW7nEgG', 'y8oFlxhcMW', 'WOn4cCoIW5m', "iGNdQ8kLWRD2W7/dGL5Y", 'WPFdHHzX', "WPX4W4/cHLm", 'WOS1W5OxyG', "WQ/cJwVdKwOWW6hcHa", 'W6mHW7yXlmo2W6m2bcm', 'WOxdOtPpW5u', 'WOldNXr8W7i', 'hJr3eCoP', 'wSopDSkcW4FdLSkdca', 'WPbrW7dcMCkg', 'W4aGWR3cH0JdPgO', 'wmkOsSo1ba', 'hxrOW7auWR3dNeTQ', 'nmkbCIldM8kYkmo6ACo0W71DaG', "WOj/cCkhhq", 'ymoyiNVcNCoVzmoUBCop', 'r3VdH1nd', 'W7eTfW', 'WO4PWRdcLuZdTq', 'cvLvW6ui', 'WR8wW6mTqa', 'WQvqoZG', 'WPBcH3aFW5DMW6fFaue', 'qZ3cG8kOWPa', 'yxKVWQZcIa', 'WQzxWQVcSCouW68MW43dISkW', 'WOKIWOtcRuG', 'WQ5KlCkwkG', 'FCosrxxdMW', 'W4C4W6iThCkXW6SjeIK', 'W741W6yZcq', 'xNrIFqa', 'WOiVWRJcGuldVce', 'nslcH8oMW44', "DvZdO8ogW6/dLSoHh2O", 'wmk1eeC', "W7/cO07cHX8", 'efLxW6Wj', 'emo9phbjW61eWRxdVmk7', 'WRRdOafpW6W', 'WPhcUgtdKKu', "WO/cLNah", 'W5ZcT3PJjq', 'WO8qW7Kata', 'W4WPW7WZWReMrJH2', 'AbOKmmkyEmkHDG', 'fxv5W6WvWR3dJfDU', 'aCkuWRhcRCki', 'rwFdHa', "W5/cM3ZcSsbmo8oDs8o7", 'tx4oWPZcNCkKW6a', 'xWtcGSkfWOi', 'W4dcJsDjWRhdJa', 'BmkeneFdLG', 'WPnuW6NcMCkBWRSwvYBdIq', 'WP0XW642BCodwetcQCk6', 'gmklWRZcN8k7', 'mSo7oxvm', 'WOTOlSo2W5u', "W5ZdMg3dN1S+nSkvy8oC", 'W7JcThbWjG', 'umkHd3xdNW', 'WQPjfSoPW4u', "hs9+emk6WP0qW5hcGvC", 's3qt', 'W6tcMuX3oW', 'W4JdHCkzjdzuWPeuW7VcPW', 'amkocSkxW4BdJmkig0tcQa', 'zmodnxZcH8oZ', 'yCoIBW', "jG/cUmkU", 'WRzoW4RdRxa', 'W4O4lmkMWPm', 'WQPeomoDW4NdSf0DaLu', 'uSktWRZdUa', "WQzxWRNcSmoMW4CPW5ZdSmk/", 'tbyHoSk5', 'W43cI1PDgq', "W6/cQwpcVWq", 'WOVcLCkugtvPWP8c', 'WQ19lSoiW58', 'qtiTkCkR', 'o8omostdV8kcwSkoo0G', 'DGuVl8kaCmk2A8oQWQm', 'h3abpfuDWRrXW6O', 'aCkcWRBcJSkc', 'WQLBW4VcM1W', 'W5meCmo9rmoRC8oBW5SwW5RcHSkw', 'W7bAWOdcU8kgWQP3WPqxCG', 'WRn3nCktcq', 'WR3cV24ZW7byW4r5cwK', 'sSoJz8kLW74', 'F8ojW69DlW', 'eSopW4pdLmkJWPZcHHHgyq', 'bConW5ddPCkI', 'D1BdJbdcIW', 'W6xcJvtcVYW', 'W5z1W63dLrldLGC4W5S2W5u', 'uM7dHeS', 'h8kEWQhcMSkuu1ORrbi', 'WOVcUuDCDW', 'FCkSmKFdVa', 'tSknfgNdHq', 'W7VcPhhcHsu', 'W49saCkK', 'WOKZWOtcL1G', 'ASkxrSoVeG', 'wmo1vehdOW', 'W43cQuNcNWa', 'W6ddQfFcGq', 'zSkmcLVdOCkDw8ocoem', 'omk2WRZcRSkT', "zmo+z2RdNG", "W5/cV2dcSte", 'wujNsJ8', 'mHBcUmo5W7NdVmoMjwqo', 'WQ13W5ZcOgK', 'WOTmm8kOcG', 'W7NdLmoxCWmfx8oZW5zf', 'WQn9pCo9W7rXfCkteLO', 'Amozjq', 'E8kqxKhdOSobpSoIe8o1', 'WRLDWRW', 'qSoVCLpdUw7dJNBdKq', "W5BdOSo+wJm", 'WQD3lN4Q', 'sCo8eeZdO8kimmoZqmk5', 'W5FcJ1W9WPS', 'sNqAWQZcGq', 'WO9gkmknpq', 'iLq7fvu', "W4tcTLq+WPW", 'WOXRaCo4W6tdLa', 'WOn2mSkScW', 'WPjoW67cHSkqWPOC', 'c8oTtXBcPSkBzCo0rSk3cahdUa', 'WOxcMNeAW51KW6u', 'WROLWRNcJge', 'WR5VW7NdUhi', 'dGOhW7FcVwLMFSosWQ4', 'nNvPW4O', "WRxdSCk+WPzU", "W5dcJvP/hG", 'WOBcMgvXwCoLsmkbWPKs', 'W5VdJmkuiHfEWPy', 'W7SmW6OwWOG', 'oXxcR8kvWRD8W70', 'ldNcJmkPWPS', 'AeT5xs0', 'ffCcpLm', 'q8opqq', 'WRPsiSouW5Pbc8kwjeK', 'WQL1WOpdImke', 'oXVcUW', "WRtdG8ksWPr+", "W4/dVg/cLmkv", "WR97WOldVCk/", 'sM7dMvHoCq', 'WOK8WQ3cP2m', 'W5xcLg5Baq', 'tCocymkcW40', 'WOHaiSoMW5C', 'WPZdMHq', 'ACotl3pcNmoP', 'gaRcMCkYWPO', 'cu05beG', 'zx8jWQdcH8kKW7nVWOC', 'cNWBgeKrWRP4W6NdSW', 'W4achmk7WQK', 'W4KIW4qqkmopW5uQncm', 'W6mUW5OYWPS', 'mmomW7DSiCkHhCkqW6NdOW', 'W7VdMSoWDq', 'DqWRjmkUvCk2FmoxWO8', 'y8odW7zQjW', 'sCkomuVdUG', 'eSo0BGFdUhxdGYBdLw0', 'mSkoDv3cM8ofDSoFCG', 'W4eUW6yvWQS', 'wJJcKSkiWPtdTG', "WQpcKfJdP3C8W6hcLmo/", 'fxv5', 'oWr4pSoB', 'WP5rW7tcNmkqWPGk', 'WORcILLVxW', 'xCogW4DUkSkfdCksW5BdTW', 'WR0OW4irrmopBNZcU8k0', "WRL/eq", 'ywJdO2Tp', 'WRFdK8kfWP9XW6S1xqyT', "baVcOmo/W58", 'u30dWQZcLW', 'ySktsmojomo3W4y', 'F11SyJKQpJfWWRC', 'yYtdLSkBWPhdTg8h', 'WRDPW7NcO8kuWPqJzWBdTW', 'W4NcKx4DW5mMW6PcduO', 'WQ16aCkjpG', 'WR0cW7Suza', 'r8o0CqNcNq', 'FsaM', 'esqgWPBcT8kEW6v5', 'W50LW6mGaa', 'W5ldNHPdWOZdT2dcNCocqa', 'E8kRm0hdUG', 'kHKPiJa', 'yIetimkg', 'wCoLz8keW4m', 'WRCxW5u3va', "W7/dH17cJ8ko", 'B8kUcNxdGW', 'bKWmg3mBWQnFW53dRW', 'WQVcKuNdIYS', 'svJdQdhcIW', 'WRPtaSojW5a', 'WPxcHepdJMu', 'E2ZdPq', 'W6hcOGjSWOG', 'WOBcRNC', 'WRBcJeldJMe3W7tcJ8oSW5G', "W7/cQgH9oSov", 'W4BcRvTziq', 's2tdK2a', 'WPJdRCkUWPLr', 'W4yyomkfWPy', 'W4pcIInoWRddKuxcKmozqG', 'W5ldI8o1Ftq', 'WQT0hLmR', 'WQnwhG', 'xmkUh07dSSoB', 'ivrxW6KR', 'W7uYW7q3d8oS', 'WRjkW4RcOSkC', 'WOhcPgK', 'qweAWQpcIW', 'W78zW7SaWP8', 'ECkWFSoeaG', "wmk+FG", 'W7FcNIfWWQi', "WQy/W5q", 'WQH3h8oUW58', 'W77cJ2ZcJrz6', 'ceiGi0a', 'W4NdG8kkhWnnWPWdW43cVW', 'W7lcUhjYiCop', 'WP3dNaP6W5C', 'WPXoW6q', 'WP49W58vsG', 'e8keWRhcSmkxtG', 'WPLmW5FdSx4hgmoNv8k1', 'W43cNK4', 'WPNcO2Tx', "hCoImxv/", 'WOzMW6pdN3qIo8o7DCkA', 'ACo7ErJcMCkO', 'WQfkWPxcVSoJW60nW7hdRSkO', 'WPDlW7RcOxy', "WP/cMNFdVeC", 'WPjRW5BcS8ks', 'qh7dMvXoCmkTwa', 'WOCGW5SPDa', 'WRdcMKRdKM4', 'hCk5WRtcVSkZ', 'W7pcSNG1', 'WRv1WQxdKCkJ', 'iNObfa', 'WQisW5WbAG', 'q8okW51AcW', 'thqeWQJcHSkI', 'W4NdKmkDlbXqWPGFW53cGq', 'vJyy', 'zbWMiSkoCCk2', 'dgzih8ojW5ebW47dQvS', "WO5+iCocW5jSpCkok04", 'WQxcMv1PDq', 'WPz5W5BcH8kY', "lmosW7RdGCk/WQdcSGzGBG", 'D8kAewJdPG', 'WOTUaSkreq', "WRC/W54oEmomwLddTSkY", 'C8otm2FcGCoUFG', 'W6ldMxpcSmkL', 'W6xcHglcJq1beW', "WPK/W6uMyG", 'WOL0zCkOWPFcVmkUBMJdOa', 'WPdcMxeAW6m', 'WPr7W5ZdOLS', 'W5tdSCotuHe', 'WOVcOMjCqa', 'umkZf00', 'WPZdGbXMWQK', 'mbpcP8kJWQS', 'WOfFhmkK', 'W5BcSgLNpa', 'W7RcNL5ghG', 'W6CeW60IWRS', "fJH+ea", 'r8oKEJ7cHq', 'W4adW4C', 'ySkdeepdPa', 'uSk9dq', 'WOVcMNS', 'W5ldO8kYaX4', 'WP3dIHzYW7iG', 'smojsCktW4y', 'W6RcN2JcIWfNgSov', 'W4BcQfBcSHb9dmo4w8o9', "W4a/pSklWPhcPSkNBNlcOq", 'W6aFW4u2WOG', 'WRPQW6pdJMy', 'ECkagwddN8kcwG', 'r8oubCkAW5RdNSkjiLJdOW', 's8oUt07dSa', 'W6PnW5FcThbFqSoiW5Hh', 'W6NcM0X8bW', 'yZmzWRRcUa', 'kIGChItdLrldSW', "W5/cQvq", 'W74uamkpWQG', 'WOrvlG', 'W74VW7e', 'WP8qfSoRW6Wdgmk2ghC', 'ySonvNFdLq', 'FmkbhghdQSkIwa', 'W4RdKSkxnHvtWPWFW4VcUW', 'WOGOWO3cG2m', 'WQrGWRdcMmoj', 'WQbbW7JcT8opW4OGWPNdLmkN', 'WPLlpSofW4i', 'zCkycwddVW', 'W7FdHeNcISkn', 'v8oUre7dUZtdKu7dUfy', 'DSohW69ngW', 'aJlcM8kFWO5WW4dcSMTX', "vSo/rJtcOq", 'W4ZcKM1dl8oHmeZcI8or', 'W6xcUNFcGaC', 'W7tdI8oTFaS', 'WOdcPgOz', 'WOavW6K', 'W7FdJ8kCnrXy', 'ic4rba', "W7SQWQ/dIxa2nSoyzCou", 'AfXiFYe', 'WR1sWOm', 'W4JcRwhcGJi', 'WRNcHfzCsW', 'WRDnW4RcRuXcx8kFW6nK', 'yZBcLmkrWP0', 'jY7cJmkJWO4', 'WP5LW5lcHuG', 'WRTKWRldLSkJWO5YWPCZza', 'WQf3j8o0W6i', 'WO9snSkBamk5nCocW4u', 'lc4CnsFdMtddTmkbW4y', 'WQ1aW57cNq', 'qWWqW7C', 'vSk5eetdO8oa', "W7XQW7ZcI3S/lCkkBmkB", 'WQz2W5JcR8k3WPaWstNdQq', "W78VW7q+j8oWW6SadGS", "r1/dOKLV", 'FtCHWPu', 'W6uzW5SoWQ4', "WQBdGJrxW40/WQ4EWO/dJXJdMa", 'WP3dV8k5WR4eWQXhCWaA', 'u3rhCHuhfWTMWPm', "z8oAFmk/W7pdT8kuovZdPq", 'WRLTW7RdTgy1lCoFCa', 'WPu3WRlcQ1C', 'ymkbhghdTmkeumolma', 'W4mVWQFdGe7dVZb2W6uo', 'jCowW7RdK8kL', 'sXegWRJcVq', "WOn+hSo9W7nSf8kisN8", 'WR3dMtz3W6C', 'WO1RW6BdV3mjk8oAy8ks', 'WRO7W58j', 'WOuVWRJcHvm', 'CSomW5HFnW', 'rgD6EtG7arXa', 'FKtdVKD7', 'Drq4mmkj', 'dSoEogfm', 'WOfskSkJg8kOcCowW5Sk', 'hmoQp2jp', 'ocGAkdBdKthdOCkpW40', 'WQraWRFcOSofW4aKW5FdGmkJ', 'WOfFhmoB', 'wtlcGmkhWPi', 'WPldUSkXWR8', 'W6aJW6Cfc8o8W7SmbaW', 'WQVcKuNdJwG8', 'yaeKWQhcGa', 'WQdcJeldLq', 'ySo7yZ3cMmkPcCk0W5KV', 'WRXwWP3dVmkaWQC', 'C8ogFGFcUq', 'c8oOsHxdTCoLi8ourmky', 'DLDUwdGHcq', 'Dt7cMmkz', 'BKXSmW', 'WONcL3umW5f8', 'WPTMn8osW60', 'wCkwkgxdUG', 'Btyaamkc', "ySokW7vSiCk+", 'WQTpdSo6W78', 'WPBdNmkPWP52', 'WPfXfv4T', 'WRHnoMGabSkFWQnTW6u', 'DSoAW7fQnSkJaCkl', 'W6zBoMeximk2WQztW5e', 'W4JcGxBcUd0', "sCk/dhZdUConkSoYsmk2", 'W4FcLbvyWQS', "WR/cUxLyCG", 'CCoXraVcN8kPc8kN', 'W7VdLCkTmcC', 'dmooW5hdJ8k0', 'ASowzHNcPG', "h8krfmodWOtcJmoAhvJdPCkbWR/dTa", 'nGZcSSoH', 'fCoXjLy', 'W77cLf8mWRO', 'DIFcHSkrWOe', 'AgxdUttcJ8odWO4', 'WPfrWQNcK8oq', 'FuPLzHiHgJf2WQi', 'WObZASkRWOhcQCkKAh7dRW', 'WOdcH34eW5D7', 'WPxdMqPwW7m', 'swNdNvPzBq', 'W6VcIYruWQNdMG', 'eMbKW6GK', 'WPDQcmoiW6O', 'WPralCofW4m', 'c3abm08qWPTJW6tdMa', 'WQ7dOeNdHmkSW7CAEwNdHa', 'W7iAW7KK', 'W6xdMSoVyXC', 'FSktsmojjSorW45Vva', 'W50etmkYW7PUc8krhfy', 'qGyAWRdcU2q', 'kIFcNComW7i', 'W4uZjmkT', 'WPXoW6tcHSoq', "WQy/W5qu", 'W5qgW6qSWPG', 'oqPHmCoR', 'W5FcSrvZWQFdSwJcS8oHyW', 'WOL8cG', 'hvDYW4S', 'bWGMiIm', 'WOGJWQ3cKW', 'WPddVSkYWR1qW6K', 'WQfGcCovW5G', 'pav1jSod', 'C8oYEqZcVa', 'lJmnfa', 'DSocigBcNmoYr8oIA8oj', 'y03dSSoZW60KWQlcK2bqWOqvW5C', 'hHFcVSk0WRe', 'W5pdKSkD', 'W7xcTePqjG', 'yttcHCoaW4RdM8ouaKGL', 'DtBcHCky', "B0/dVdxcTG", "D2/dRq", 'WPeJWQtcJehdSYe', "d8oAW4/dGW", 'WOldVtD9W6S', 'yubqrJ4', "WO5Hg8k/W6tdLh1Yp3C", 'BmkocfVdLa', 'WODaW7pcPCkp', 'WQTeW7NcHmkp', "gY9+fCoUWPO3W4ddKeS", 'W7FdQmkSgcu', 'DSkafNFdPSkFs8oniee', "W6RcMgNcHtzMfmojCCo/", 'ysGSWOdcI0LiwmoSWP8', 'WQ42W54', 'Ct7cMSkyWOS', 'WOvewmoOW7DchSkohN8', 'WPb5W6ZcNCkVWPK6qaldGG', 'mezZDSoEw8kqA8onWQVdQq', 'kJSygYS', 'nCkBeghcSG', 'W4JdHCkllXXlWPG', 'smoXCWRcGCkL', 'sx8zWRVcK8kMW6S', 'wmovW5PCgSkl', "jmo/oKbx", "WOb/bSk+iW", 'WRLXWQe', "WPToW5xdVL0Qhmo/wmk1", 'W5hdVmo6EJu', "WOz+exWo", 'BY4IWPVcIa', 'bHSfgIu', 's2tdKX8', 'iCkYWPC', 'WQTGcCo0W5y', 'twJdGshcGG', 'WP0kW6y3yG', 'WORdVSkUWQLnW64j', 'WO4PWRdcR1ddPc05W6C3', 'W4PvmmoKhCkZnCkxW5qy', 'W7BdSColvH8', 'rXtcPmkyWR8', "i8kxWQ0XDSo+bmkbW4xdN1/cLW", 'WPHlWOFdJ8ko', 'WPxcLM02W4f4W6vDdKK', 'ztlcNmkyWPVdPW', 'WOfIW7pcS8km', 'WRPugCopW5a', 'W4VcIYrTWQRdNLxcKmop', "WO/dV8kEWQ5s", 'wHJcSmkuWP8', 'rCkRf3FdMSkzvCkvzwm', 'W6xcOaftWRi', 'iXtcP8oJW6u', 'WR1yWQmGWQ0HtbnAWRy', 'WR7cRhXlwa', 'W7JcHvxcNaDNg8oC', 'vwmg', 'v0xdK1r2', 'AmoXCYa', 'WPlcPhuJW6a', 'ir7cRmkrWQi', 'W78va8kXWQu', 'ySktx8oyiCouW4XcxZ4', 'dCopW4pdSSkLWPRcLYjCEa', 'WPldVd5xW7W', 'vCo0BH3cP8kkmSkcW6Kn', 'W4pcNcneWRxdI1JcMSof', 'WOPyf2GS', "pr/cSSk1", "W4S/jmkUWPdcPW", 'W73cJgu1WRG', 'B8o0dMtcNa', 'zmoUzXpcLa', 'E8o3v0JdMW', 's8ouewlcPW', 'WRbbW6VcHK1Bvmku', "W7W+W70NWPu", "WOxcTNO+W4m", "W7/cRZbRWO8", 'WQpcJeJdNcq7W6dcLCkVW5q', 'W5hcN1y', 'jY4gecBdMa', 'WPOEWQ7cGxq', 'W4ZdQSoYuZ4', 'WOVcTNNdOfe', "rIa+WPtcOq", 'W5tcGsPeWQBdIW', 'WOTFcmouW6i', 'smoEwKJdLq', 'wSoUz8kSW6y', 'WOtcNhen', 'pJNcGCkfWRy', 'WOjgjCktjq', 'W5qUk8k7WPdcPSkLFtVcPG', 'W7pcQg98nSolp3xcOCoY', 'DGxcT8kOWPO', 'sN0IWOhcHSkiW51RWQtdTq', 'W6ubW7OIba', 'cvGVm3y', 'WOtdMX4T', 'uCoXBG', 'W4RcHxhcMdy', 'W7ldK8oPyW', 'CfVdN1v1', "WP5/pmovW7a", 'W7JcR3n4', 'W6JcOuRcVr8', 'WPvIkmofW4bZoCkHe0G', 't8ojsCkxW5FdK8ki', 'WQmUW48pCa', 'WQX0W77dJ3G', "WPX7WQldI8k/WODjWRGXBa", 'zSokW616k8kLaa', 'WPuJWQBcIuBdUseY', 'W6ldVwlcICko', 'zdtcHmkIWPZdSMOsWPdcMG', 'msxcS8oiW4y', "rcOLWR/cIG", "FSk8lM/dLW", 'WQ5nmhu', 'WO8FWQFcSha', 'WQDtj8kXh8k5', "W6/cJGPoWOG", 'FSoWBSkMW7y', 'WRSfWRNcHMi', 'WQa1W4KOrW', 'W4OlW6uqia', 'WODjduaf', 'W6mYW7OUbCoRW7yJeG', 'WRbpW6BcV8k3', 'WQW5W5LeuCoaE3hcSa', 'B8o7bflcJq', 'WRTwWOO', 'nWRcU8kQWQe', 'W7tcLMO', 'WRmFW79HWRa9xuDiW68', 'WODvaq', "W7ZcScz2WQ/dPKJcN8oItG", 'cN98W4SHWRhdHfTjEW', 'd8opW4ddJSkg', 'WQddJt9AW4W9W7WlWOFdGWtdL0u', 'WQ3cN0tdGMSgW77cJ8oMW5O', 'WOZcU35vsG', 'buWri2W', 'W7aEW60ZWP09tqjOW60', 'hYeDiJO', 'WQvEW63cI1e', 'FwpdUN1ssSkwBmoAW78', 'BNpcQt7cH8ohWOnP', 'yx5GrbGapILMWQu', 'WQ92omorW4tdHeiEdKK', 'WQBcO2nrwq', 'A2tdK0PwFa', "WO1Hc8k/", 'vCkPj0NdKW', 'WR3dMmktWQ1r', 'W5pdV8k9WQ5fWQ8nyrGv', 'W7pdK8oTvcS', "WQ/dMmko", 'pmkEWRhcVq', 'gHv5lmoO', 'W4VcIYq', 'bCo9of5DW6Dn', "tSkGEWSlWRmAWQ3dU8kTWP/cRSon", "qSk+hwFdHG", 'WQTnoNKveCkOWOTZW7q', "WQH+WPNdMmk3WODyWRa9ya", 'W6hdRLdcNSkn', 'WOz8amoYW5pdLhKGgwa', 'ztKHWPVcGG', 'rfLMzW', 'W7ddGSkDmb0', 'WRv6W4NcOfG', 'WPNdOHrtW4a', 'h05eW4Wn', 'W6aJW6Cfgmo6W6WHaGW', 'x8ohv8kbW4W', 'hCo5FfpdTZtdNxxdM3u', 'etdcGSon', "W7BdKbZdMLnIW4pcHCo+W5y", 'g8kFWQhcVCkaC18', 'y8oFlwdcJCoZ', 'cmk1WPxcUSkw', 'WOzkaCodW5S', 'sN4dWQe', 'EZJcGCk8WRK', 'ug7dHuXtDSkS', 'dNqgfa', 'DvLNBG', 'W7qLW6eyh8o2W6mNhGS', 'W7FcRWvfWOe', 'WODtj8oK', 'WPldUmkZWQ9kW7ucya', 'WOTDoCo0W5u', 'xmofvSkzW5NdICki', 'W6NdRe7cPSk3W7eclwhdNa', 'W7FdKCokCIuZA8obW4rH', 'AHiGoCkJ', 'vmomiexcJW', 'WRv6W6hdJhG', 'W7WtWP7dUSknW690WPqcya', 'W5mJoSkS', 'WOZdTmksWPnN', 'W7ZcI3tcMXa'];
  return U = function () {
    return e;
  }, U();
}
function Z(e, c, e2) {
  const e6 = {
    'vasPp': function (e7, e8, e9) {
      return e7(e8, e9);
    },
    'AWzEq': function (e7) {
      return e7();
    }
  };
  H[e] = c, L(h[e].key, e2 || []), C();
}
i(Z, "install");
const A = {};
A.knightHandOff = null;
var a = A;
function b(e) {
  const e2 = {
    'VczMH': function (e6, e7) {
      return e6(e7);
    },
    'voWOp': function (e6) {
      return e6();
    }
  };
  if (x(e)) return Promise.reject(new Error("mod " + e + " is not available"));
  if (H[e]) return Promise.resolve(H[e]);
  if (t[e]) return t[e];
  let e5 = T[e];
  return e5 ? (t[e] = Promise.all([e5(), J(e)]).then(([e6, e7]) => (Z(e, e6, e7 && e7.files && e7.files.length ? e7.files : D(e)), e6)), t[e]) : Promise.reject(new Error("mod " + e + " is registered but its code was not built"));
}
i(b, "loadMod");
function D() {
  return [];
}
i(D, "packFilesFallback");
function G(e) {
  const c = {
    'igRWY': function (e8, e9) {
      return e8(e9);
    },
    'JzvNU': function (e8, e9) {
      return e8 < e9;
    },
    'jepcs': "module",
    'bcGVu': function (e8, e9) {
      return e8(e9);
    },
    'ENwqM': function (e8, e9) {
      return e8 === e9;
    },
    'zMxPu': "bHbXr",
    'CDArw': "CkJWc",
    'siIwV': "utf8",
    'xBwOi': function (e8, e9, ee, ec, ek) {
      return e8(e9, ee, ec, ek);
    },
    'Sznva': function (e8, e9, ee, ec) {
      return e8(e9, ee, ec);
    }
  };
  if (x(e)) throw new Error("mod " + e + " is not available");
  if (H[e]) return H[e];
  let e2 = typeof process < 'u' && process.getBuiltinModule ? process.getBuiltinModule("module") : null;
  if (!e2 || !E[e]) throw new Error("mod " + e + " is not loaded - await loadMod('" + e + "') before starting its fight");
  let e5 = e2.createRequire(import.meta.url)(E[e]),
    e6 = D(e);
  try {
    let e8 = process.getBuiltinModule('fs'),
      e9 = JSON.parse(e8.readFileSync(new URL("../assets/mods/" + e + "/data.json", import.meta.url), "utf8"));
    e6 = B(e, e9, ee => Array.from({
      'length': ee.frames
    }, () => ({
      'width': ee.w,
      'height': ee.h
    })), null).files || e6;
  } catch {}
  return Z(e, e5, e6), e5;
}
i(G, "loadModSync");
function I(e) {
  const e2 = {
    'KIrNT': function (e3, e4) {
      return e3(e4);
    }
  };
  return H[e] || G(e);
}
i(I, "need");
var j = false,
  q = ["scr_damage", "scr_damage_all", "scr_act_simul", "scr_spareanim", "scr_recruit", "scr_nextact"];
function C() {
  const e = {
    'yXzaT': function (e3, e4) {
      return e3 === e4;
    },
    'sssVz': "RrwaA",
    'AyHkr': function (e3) {
      return e3();
    },
    'cKAKJ': function (e3, e4) {
      return e3 == e4;
    },
    'jCEzP': "function",
    'HStxz': function (e3, e4) {
      return e3 == e4;
    }
  };
  if (!j) {
    j = true;
    for (let e3 of q) {
      let e4 = n[e3];
      n[e3] = function (...e5) {
        let e9 = V(),
          ee = e9 && e9.SCR[e3];
        return typeof ee == "function" ? ee.apply(this, e5) : typeof e4 == "function" ? e4.apply(this, e5) : void 0;
      };
    }
  }
}
i(C, "installHooks");
function V() {
  const c = {};
  c.tNBZS = function (e5, e6) {
    return e5 === e6;
  };
  const e2 = c;
  if (e2.tNBZS(m, null)) return null;
  for (let e5 in H) if (e2.tNBZS(h[e5].key, m)) return H[e5];
  return null;
}
i(V, "activeNs"), N(i(function () {
  const e2 = {
    'PCReG': function (e3, e4) {
      return e3 !== e4;
    },
    'nuAJB': function (e3, e4) {
      return e3(e4);
    }
  };
  m !== null && s(null);
}, "resetActiveMod"));
function W(e2, e3) {
  e2 = e2 - 176;
  const e4 = U();
  let e5 = e4[e2];
  if (W.GHteeA === undefined) {
    var e6 = function (ee) {
      const ec = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let ek = '',
        ed = '';
      for (let eY = 0, ez, eS, eQ = 0; eS = ee.charAt(eQ++); ~eS && (ez = eY % 4 ? ez * 64 + eS : eS, eY++ % 4) ? ek += String.fromCharCode(255 & ez >> (-2 * eY & 6)) : 0) {
        eS = ec.indexOf(eS);
      }
      for (let eF = 0, eX = ek.length; eF < eX; eF++) {
        ed += '%' + ('00' + ek.charCodeAt(eF).toString(16)).slice(-2);
      }
      return decodeURIComponent(ed);
    };
    const e9 = function (ee, ec) {
      let ek = [],
        ed = 0,
        eY,
        ez = '';
      ee = e6(ee);
      let eS;
      for (eS = 0; eS < 256; eS++) {
        ek[eS] = eS;
      }
      for (eS = 0; eS < 256; eS++) {
        ed = (ed + ek[eS] + ec.charCodeAt(eS % ec.length)) % 256, eY = ek[eS], ek[eS] = ek[ed], ek[ed] = eY;
      }
      eS = 0, ed = 0;
      for (let eQ = 0; eQ < ee.length; eQ++) {
        eS = (eS + 1) % 256, ed = (ed + ek[eS]) % 256, eY = ek[eS], ek[eS] = ek[ed], ek[ed] = eY, ez += String.fromCharCode(ee.charCodeAt(eQ) ^ ek[(ek[eS] + ek[ed]) % 256]);
      }
      return ez;
    };
    W.HIWOsC = e9, W.vnbrok = {}, W.GHteeA = true;
  }
  const e7 = e4[0];
  W.iyPvTF !== e7 && (W.vnbrok = {}, W.iyPvTF = e7);
  const e8 = W.vnbrok[e2];
  return e8 === undefined ? (W.obWSvJ === undefined && (W.obWSvJ = true), e5 = W.HIWOsC(e5, e3), W.vnbrok[e2] = e5) : e5 = e8, e5;
}
var K = {};
function o(e) {
  const c = {};
  c.zDPbn = "mod_";
  const e5 = c;
  for (let e6 of Object.keys(K)) delete K[e6];
  if (e) {
    for (let e7 of Object.keys(e)) e7.startsWith(e5.zDPbn) && (K[e7] = e[e7]);
  }
}
i(o, "setModCfg");
function v(e, c, e2) {
  const e4 = {
    'kiVEs': function (e9, ee) {
      return e9 + ee;
    },
    'wFPiR': function (e9, ee) {
      return e9 + ee;
    },
    'dWURz': "mod_",
    'gAWVl': function (e9, ee) {
      return e9 !== ee;
    },
    'KZULM': function (e9, ee) {
      return e9(ee);
    },
    'XCmfB': function (e9, ee) {
      return e9(ee);
    }
  };
  let e7 = "mod_" + e.mod + '_' + c,
    e8 = e2 && e2[e7] !== void 0 ? e2[e7] : K[e7];
  return Number.isFinite(Number(e8)) ? Number(e8) : 0;
}
i(v, "modOptionValue");
function O(e, c) {
  const e4 = {
    'gXVrM': function (e7, e8) {
      return e7(e8);
    }
  };
  let e5 = p(e);
  !e5 || x(e.mod) || (I(e.mod), s(e5.key));
}
i(O, "prepareModEncounter");
function e0(e) {
  const c = {};
  c.pwqdm = function (e7, e8) {
    return e7 == e8;
  }, c.CYcJA = "function";
  const e3 = c;
  let e6 = H[e.mod];
  e6 && e3.pwqdm(typeof e6.SCR.scr_spellmenu_setup, e3.CYcJA) && (n.spellmenu_setup = e6.SCR.scr_spellmenu_setup);
}
i(e0, "finishModEncounter");
function e1(e) {
  const c = {
    'yEQZR': function (e6) {
      return e6();
    },
    'YQoCL': function (e6, e7) {
      return e6 == e7;
    },
    'FylWX': "function",
    'Sgrrk': function (e6, e7) {
      return e6 !== e7;
    },
    'cCeWq': function (e6, e7) {
      return e6(e7);
    },
    'Bjfvp': function (e6, e7) {
      return e6 === e7;
    },
    'vAoxn': "NpRtB",
    'YKvWz': "VRvxC",
    'dCBSK': "jdPMh",
    'lPITg': function (e6, e7) {
      return e6(e7);
    },
    'iPqhr': "MOD",
    'wdgWz': function (e6, e7) {
      return e6 + e7;
    },
    'lYsPP': "base",
    'pXVsE': "verified",
    'eMZBL': function (e6, e7) {
      return e6 + e7;
    },
    'zxZMi': "#PROVISIONAL build: not the exact#patch",
    'gIzam': ", may differ.",
    'xxyts': "music"
  };
  let e3 = [];
  for (let e6 of f) if (!x(e6.id) && !(!e6.built && !T[e6.id])) for (let e7 of e6.fights || []) {
    let ec = e.find(eS => eS.id === e7.base);
    if (!ec) continue;
    let ek = M(e6),
      ed = e6.id,
      eY = (ec.monsters || []).map(eS => ({
        'type': eS.type,
        'x': eS.x,
        'y': eS.y,
        'setup': () => {},
        get 'cls'() {
          let eX = H[ed],
            eL = eS.cls && eS.cls.name;
          return eX ? eX.OBJ[eL] || eX.STUB[eL] : null;
        }
      })),
      ez = {
        ...ec,
        'id': e7.id,
        'name': e7.name,
        'mod': e6.id,
        'modKey': e6.key,
        'credit': ek,
        'customTag': "MOD",
        'listAfter': ec.id,
        'area': e6.version,
        'generated': false,
        'desc': e6.name + '\x20' + e6.version + "#by " + ek.author + ".#A mod of the " + (ec.name || "base") + "#fight." + (e6.provenance === "verified" ? '' : "#PROVISIONAL build: not the exact#patch" + (/matches (\d+\/\d+)/.test(e6.provenanceNote || '') ? '\x20(' + /matches (\d+\/\d+)/.exec(e6.provenanceNote)[1] + " checksums)" : '') + ", may differ."),
        'provisional': e6.provenance !== "verified",
        'modOptions': e6.options || [],
        'monsters': eY,
        'encounterno': e7.encounterno || ec.encounterno,
        'musiclevel': ec.musiclevel
      };
    Object.defineProperty(ez, "music", {
      'enumerable': true,
      'configurable': true,
      'get'() {
        const eS = {
          'qTqRg': function (eL, eB) {
            return eL !== eB;
          },
          'DmXur': function (eL, eB) {
            return eL(eB);
          }
        };
        return this.modSong || ec.music;
      },
      'set'(eS) {
        this.modSong = eS;
      }
    }), e3.push(ez);
  }
  return e3;
}
i(e1, "buildModFights");
export { x as a, h as b, M as c, w as d, p as e, a as f, b as g, G as h, K as i, o as j, v as k, O as l, e0 as m, e1 as n };