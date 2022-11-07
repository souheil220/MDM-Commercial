// A vérifier la colonne E

// Type De Porte
{
    if (D3 == "") {
        return ""
    } else {
        return "Type De Porte"
    }
}

// Modele De Porte
{
    if (D4 == "" ||
        (D3 = "Cadre Seul" && D4 != "")) {
        return ""
    } else {
        return "Modele De Porte"
    }
}

//Matière De Finition

{
    if (D3 == "" || D4 == "" || (D5 == "" && B5 != 1)) {
        return ""
    } else {
        return "Matière De Finition"
    }
}

// Couleur

{
    if ((B5 == 1 && D6 != "" && D6 != "Aluminium" && D6 != "Inox" && D6 != "Acier Laqué" && D6 != "MDF Brute")) {
        return "Couleur"
    } else {
        if ((D3 == "" || D4 == "" ||
                (D5 == "" &&
                    (E6 == "A" || E6 == "B" || E6 == "C" || E6 == "D" || E6 == "E" || E6 == "F" || E6 == 8 || E6 == 9 || E6 == 5 || E6 == 6 || E6 == 7)) ||
                D6 == "" || D6 == "MDF Brute" || D6 == "Aluminium"
            )) {
            return ""
        } else {
            return "Couleur"
        }
    }
}

// Nombre de Ventaux

{

    if (((B5 === 1 && D7 === "" && D3 === "Cadre Seul" && D6 === "MDF Brute") ||
            (B5 === 1 && D7 !== "") ||
            (B5 === 1 && B7 === 1))) {
        return "Nombre de Ventaux"
    } else {
        if (D3 === "" || D4 === "" ||
            (D5 === "" && E6 !== "A" && E6 !== "B" && E6 !== "C" && E6 !== "D" && E6 !== "E" && E6 !== "F" && E6 !== 8 && E6 !== 9 && E6 !== 5 && E6 !== 6 && E6 !== 7) ||
            D6 === "" ||
            (D7 === "" && D6 !== "MDF Brute" && D6 !== "Aluminium")) {
            return ""
        } else {
            return "Nombre de Ventaux"
        }
    }
}


// Largeur Precadre (Intérieur)
{

    if ((B5 = 1 && (D8 != "" && D8 != 1))) {
        return "Largeur Precadre (Intérieur)"
    } else {
        if ((D3 == "" || D4 == "" ||
                (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") || D6 == "" ||
                (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") || D8 == "")) {
            ""
        } else {
            if (D8 == 2) {
                return "Largeur Precadre (Intérieur)"
            } else {
                return ""
            }
        }
    }
}

// Hauteur Ouvrant (mm)
{
    if (((B9 == 1 && D9 == "") || (B9 == 0 && D9 != ""))) {
        return "Hauteur Ouvrant (mm)"
    } else {
        if ((D3 == "" || D4 == "" ||
                (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                D6 == "" ||
                (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                D8 == "" ||
                (D8 == 2 && D9 == ""))) {
            return ""
        } else {
            return "Hauteur Ouvrant (mm)"
        }
    }
}

// Largueur " + (D8==2 ? "1er " : "") + "Ouvrant (mm)

{
    if (((B5 == 1 && D10 != "" && D10 != "Spéciale") ||
            (B9 == 1 && D10 == "Spéciale" && F10 != "") ||
            (B9 == 0 && D10 == "Spéciale" && F10 != ""))) {
        return "Largueur " + (D8 == 2 ? "1er " : "") + "Ouvrant (mm)"
    } else {
        if (OU(D3 == "" || D4 == "" ||
                (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                D6 == "" ||
                (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                D8 == "" ||
                (D8 == 2 && D9 == "") ||
                D10 == "")) {
            return ""
        } else {
            return "Largueur " + (D8 == 2 ? "1er " : "") + "Ouvrant (mm)"
        }
    }
}

//Largueur 2eme Ovrant (mm)

{
    if (((D8 == 2 && D11 != "" && D11 != "Spéciale") ||
            (D8 == 2 && F11 != "" && D11 == "Spéciale"))) {
        return "Largueur 2eme Ovrant (mm)"
    } else {
        return ""
    }
}

//Largueur 2eme Ovrant (mm) (VALUE)
{
    value = 0
    if (C12 = "") {
        return 0
    } else {
        if (E13 == 6) {
            value = 3
        }
        if (D11 == "Spéciale") {
            value = F11
        } else {
            value = D11
        }
        return D9 - 13 - value
    }
}

//Mécanisation de Serrure
{
    if (B13 = 1) {
        return "Mécanisation de Serrure"
    } else {
        if ((D3 == "" || D4 == "" ||
                (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                D6 == "" ||
                (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                D8 == "" ||
                (D8 == 2 && D9 == "") ||
                D10 == "" || D11 == "")) {
            return ""
        } else {
            return "Mécanisation de Serrure"
        }
    }
}

// Serrure
{
    if ((B13 == 1 && D13 != "")) {
        return "Serrure"
    } else {
        if ((D3 == "" || D4 == "" ||
                (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                D6 == "" ||
                (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                D8 == "" ||
                (D8 == 2 && D9 == "") ||
                D10 == "" || D11 == "" || D13 == "" || D13 == "Sans Mecanisation")) {
            return ""
        } else {
            return "Serrure"
        }
    }
}

//"Protecteur"
{
    if (C13 != "") {
        return "Protecteur"
    } else {
        if (D3 = "Cadre Seul") {
            return ""
        } else {
            if ((D3 == "" || D4 == "" ||
                    (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                    D6 == "" ||
                    (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                    D8 == "" ||
                    (D8 == 2 && D9 == "") ||
                    D10 == "" || D11 == "" || D13 == "" ||
                    (D14 == "" && E13 != "SM"))) {
                return ""
            } else {
                return "Protecteur"
            }
        }
    }
}

// Sens D'Ouverture
{
    if (B14 == 1) {
        return "Sens D'Ouverture"
    } else {
        if ((D3 == "Cadre Seul" && D14 != "")) {
            return "Sens D'Ouverture"
        } else {
            if ((D3 == "" || D4 == "" ||
                    (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                    D6 == "" ||
                    (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                    D8 == "" ||
                    (D8 == 2 && D9 == "") ||
                    D10 == "" || D11 == "" || D13 == "" || D15 == "")) {
                return ""
            } else {
                "Sens D'Ouverture"
            }
        }
    }
}

// Vitrage
{
    if ((C16 != "" && D16 != "")) {
        return "Vitrage"
    } else {
        if (E5 = 7) {
            return ""
        } else {
            if ((D3 == "" || D3 == "Cadre Seul" || D4 == "" || D4 != "Porte de Passage" ||
                    (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                    D6 == "" ||
                    (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                    D8 == "" ||
                    (D8 == 2 && D9 == "") ||
                    D10 == "" || D11 == "" || D13 == "" || D16 == "" || E6 == "SA" || E6 == "AL" || E6 == "TR")) {
                return ""
            } else {
                return "Vitrage"
            }
        }
    }
}

// Grille D'Airation
{
    if ((C17 == "" && E5 == 7)) {
        return "Grille D'Airation"
    } else {
        if ((D3 == "" || D3 == "Cadre Seul" || D4 == "" ||
                (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                D6 == "" ||
                (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                D8 == "" ||
                (D8 == 2 && D9 == "") ||
                D10 == "" || D11 == "" || D13 == "" || D16 == "" ||
                (D17 == "" && D4 == "Porte De Passage"))) {
            return ""
        } else {
            return "Grille D'Airation"
        }
    }
}

//  Quincaillerie
{
    if ((B5 == 1 && D16 != "")) {
        return "Quincaillerie"
    } else {
        if ((C16 != "" && D4 != "Porte de Passage" && D16 != "" && C18 == "")) {
            return "Quincaillerie"
        } else {
            if ((D3 == "" || D4 == "" ||
                    (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                    D6 == "" ||
                    (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                    D8 == "" ||
                    (D8 == 2 && D9 == "") ||
                    D10 == "" || D11 == "" || D13 == "" || D16 == "" || D18 == "" ||
                    (
                        (D17 == "" || D18 == "") &&
                        D3 == "Ouvrant Seul"))) {
                return ""
            } else {
                return "Quincaillerie"
            }
        }
    }
}

// Epaisseur Mur(mm) (verifie E20 F20 )
{
    if ((E4 == 1 && E5 == 7 && C17 != "" && D17 != "")) {
        return "Epaisseur Mur(mm)"
    } else {
        if ((B5 == 1 && D19 != "" && D14 != "")) {
            return "Epaisseur Mur(mm)"
        } else {
            if ((E4 == "T" && E6 == "AL")) {
                return "Epaisseur Mur(mm)"
            } else {
                if ((D3 == "" || D3 == "Ouvrant Seul" || D4 == "" ||
                        (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                        D6 == "" ||
                        (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                        D8 == "" ||
                        (D8 == 2 && D9 == "") ||
                        D10 == "" || D11 == "" || D13 == "" || D16 == "" ||
                        (D19 == "" ||
                            (D19 == "" && E4 == "T")))) {
                    return ""
                } else {
                    return "Epaisseur Mur(mm)"
                }
            }
        }
    }
}

//Cadre utilisé
{
    if (D20 == "") {
        return ""
    } else {
        return "Cadre utilisé"
    }
}
// Cadre utilisé valeur à revoir 

// Couvre Joint Hauteur (mm)
{
    if ((B5 == 1 &&
            (
                (D20 != "Spécial" && D20 != "") ||
                (D20 == "Spécial" && F20 != "")
            ))) {
        return "Couvre Joint Hauteur (mm)"
    } else {
        if ((D3 == "" || D3 == "Ouvrant Seul" || D4 == "" ||
                (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                D6 == "" ||
                (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                D8 == "" ||
                (D8 == 2 && D9 == "") ||
                D10 == "" || D11 == "" || D13 == "" || D16 == "" || D20 == "" || E20 == 7 || D21 == "")) {
            return ""
        } else {
            return "Couvre Joint Hauteur (mm)"
        }
    }
}

// Couvre Joint Largeur (mm)
{
    if ((B5 == 1 && D22 != "")) {
        return "Couvre Joint Largeur (mm)"
    } else {
        if ((D3 == "" || D3 == "Ouvrant Seul" || D4 == "" ||
                (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                D6 == "" ||
                (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                D8 == "" ||
                (D8 == 2 && D9 == "") ||
                D10 == "" || D11 == "" || D13 == "" || D16 == "" || D20 == "" || D22 == "")) {
            return "";
        } else {
            return "Couvre Joint Largeur (mm)"
        }
    }
}

// Coupe De couvre Joint
{
    if ((B5 == 1 && D23 != "")) {
        return "Coupe De couvre Joint"
    } else {
        if ((D3 == "" || D3 == "Ouvrant Seul" || D4 == "" ||
                (D5 == "" && E6 != "TR" && E6 != "AL" && E6 != "SA") ||
                D6 == "" ||
                (D7 == "" && D6 != "MDF Brute" && D6 != "Aluminium") ||
                D8 == "" ||
                (D8 == 2 && D9 == "") ||
                D10 == "" || D11 == "" || D13 == "" || D16 == "" || D20 == "" || D22 == "" || D23 == "")) {
            return ""
        } else {
            return "Coupe De couvre Joint"
        }
    }
}

// Code Model
{
    if (D5 === "Star Massif") {
        return ""
    } else {
        return "F" + D5 + E7
    }
}

// Code protecteur
{
    if (D15 === "Sans Protecteur") {
        return ""
    } else {
        if (D15 === "1 Face") {
            return "P1F" + D11
        } else {
            return "P2F" + D11
        }
    }
}

// Code vitrage
{
    if (D17 === "Sans Vitre") {
        return ""
    } else {
        if (D17 === "Vitrage Haut") {
            return "VH" + E7 + D11
        } else {
            if (D17 === "Vitrage Bas") {
                return "VB" + E7 + D11
            } else {
                if (D17 === "V5AL") {
                    return "V5AL3+3"
                } else {
                    if (D17 === "V4AL") {
                        return "V4AL3+3"
                    } else {
                        if (D17 === "Vitrage Côté") {
                            return "VB" + E7 + D11
                        } else {
                            return "VO" + E7 + D11
                        }
                    }
                }
            }
        }
    }
}

// Code grille
{
    if (D18 === "Sans Mécanisation") {
        return ""
    } else {
        if (D18 === "Mecanisation de grille et grille d'Airation") {
            if (E7 === "FCH" || E7 === "FAC") {
                return "GAM"
            } else {
                return "GAN"
            }
        } else {
            return ""
        }
    }
}

// Code Embochure
{
    if (D8 === 1) {
        if (F21 === "") {
            return ""
        } else {
            return "EM" + D10 + D11 + F21 + E7
        }
    } else {
        if (F21 === "") {
            return ""
        } else {
            return "EM" + D10 + D9 + F21 + E7
        }
    }
}

// Code Serure
{
    if (D4 === "Porte De Passage" || D4 === "Porte Coupe-Feu 30mm" || D4 === "Technique") {
        if (D8 === 1) {
            return "S" + E13 + G13 + E16
        } else {
            return "S" + E13 + G13 + E16 + G16
        }
    } else {
        if (D4 === "Porte D'Entrée Blindée") {
            return "S" + E13 + G14 + E16
        } else {
            return "S" + E13 + G13 + E16
        }
    }
}


// F21
{
    if ("'Ouvrant et Cadre'!F20" === "") {
        return 0
    } else {
        if ("'Ouvrant et Cadre'!F20" > "'Detail Ouvrant et Cadre'!C75" &&
            "'Ouvrant et Cadre'!F20" <= "'Detail Ouvrant et Cadre'!D75" &&
            "'Detail Ouvrant et Cadre'!A75" === 100) {
            return "'Detail Ouvrant et Cadre'!B75"
        } else {
            if (("'Ouvrant et Cadre'!F20" > "'Detail Ouvrant et Cadre'!C76" &&
                    "'Ouvrant et Cadre'!F20" <= "'Detail Ouvrant et Cadre'!D76" &&
                    "'Detail Ouvrant et Cadre'!A76" === 130)) {

                return "'Detail Ouvrant et Cadre'!B76";
            } else {

                if (ET("'Ouvrant et Cadre'!F20" > "'Detail Ouvrant et Cadre'!C77" &&
                        "'Ouvrant et Cadre'!F20" <= "'Detail Ouvrant et Cadre'!D77" &&
                        "'Detail Ouvrant et Cadre'!A77" === 100)) {

                    return "'Detail Ouvrant et Cadre'!B77";
                } else {

                    if (("'Ouvrant et Cadre'!F20" > "'Detail Ouvrant et Cadre'!C78" &&
                            "'Ouvrant et Cadre'!F20" <= "'Detail Ouvrant et Cadre'!D78" &&
                            "'Detail Ouvrant et Cadre'!A78" === 130)) {

                        return "'Detail Ouvrant et Cadre'!B78";
                    } else {

                        if (("'Ouvrant et Cadre'!F20" > C79 &&
                                "'Ouvrant et Cadre'!F20" <= D79 &&
                                A79 === 160)) {

                            return B79;
                        } else {

                            if (("'Ouvrant et Cadre'!F20" > C80 &&
                                    "'Ouvrant et Cadre'!F20" <= D80 &&
                                    A80 === 160)) {

                                return B80;
                            } else {

                                return "faut"
                            }
                        }

                    }
                }
            }
        }

    }
}

// CODE
{
    var code = ""
    if (E3 === "") {
        code = code + E4 + D10 + D11
        if (F3 === "C") {
            code = code + "2"
        } else {
            code = code + E14
        }
        code = code + E15 + E16 + E17 + E18
        if (F3 === "C") {
            code = code + "3"
        } else {
            code = code + E19
        }
        code = code + E13 + E7
        return code
    } else {
        code = ""
    }

    return code
}