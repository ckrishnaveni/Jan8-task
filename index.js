let div1 = document.createElement('div');
let image = document.createElement('img');
let namediv = document.createElement('div');
let namelabel = document.createElement('span');
let name = document.createElement('span');
let rolnodiv = document.createElement('div');
let rolNolabel = document.createElement('span');
let rollNo = document.createElement('span');
let collegediv = document.createElement('div');
let college = document.createElement('p');
let addressdiv = document.createElement('div');
let address = document.createElement('p');
let branchdiv = document.createElement('div');
let branchlabel = document.createElement('span');
let branch = document.createElement('span');
let contactdiv = document.createElement('div');
let contactlabel = document.createElement('span');
let contactno = document.createElement('span')

function createId() {
    div1.style.width = "320px";
    div1.style.height = "400px";
    div1.style.borderRadius = '10px';
    div1.style.marginTop = '20px';
    div1.style.border = "2px solid #000";
    div1.style.backgroundImage = 'url("https://i.pinimg.com/originals/83/59/8a/83598a5ab3f5371e7662b565836c0c39.jpg")';
    div1.style.backgroundPosition = 'center center';
    div1.style.backgroundRepeat = 'no-repeat'
    document.body.appendChild(div1)
    div1.append(collegediv);
    college.innerHTML = "SRIDEVI WOMENS ENGG COLLEGE";
    college.style.fontSize = '20px';
    college.style.fontFamily = 'calibri'
    college.style.margin = '5px';
    college.style.fontFamily = 'fantasy';
    college.style.fontWeight = 'bold';
    college.style.textAlign = 'center';
    collegediv.append(college)
    image.setAttribute("src", "https://as1.ftcdn.net/v2/jpg/09/98/37/88/1000_F_998378893_OHh3L8wpngldVAWyOO3loPOpMGS34XcA.jpg")
    image.style.maxWidth = "100%";
    image.style.height = "61%";
    image.style.display = "block";
    image.style.margin = "0 auto";
    image.style.borderTopRightRadius = "10px";
    image.style.borderTopLeftRadius = "10px";
    div1.append(image)
    div1.append(namediv)
    namelabel.innerHTML = "Name:";
    namelabel.style.paddingRight = '10px';
    namelabel.style.fontFamily = 'calibri'
    namelabel.style.margin = "0px 5px";
    namelabel.style.fontWeight = '800';
    namediv.append(namelabel)
    name.innerHTML = "Krishnaveni";
    name.style.fontFamily = 'calibri'
    namelabel.style.margin = "0px 5px";
    namediv.style.display = 'flex';
    namediv.style.justifyContent = 'center';
    namediv.style.alignItems = 'center';
    namediv.append(name);
    div1.append(rolnodiv);
    rolnodiv.append(rolNolabel);
    rolnodiv.style.display = 'flex';
    rolnodiv.style.justifyContent = 'center';
    rolnodiv.style.alignItems = 'center';
    rolNolabel.innerHTML = "Roll No:";
    rolNolabel.style.margin = "0px 5px";
    rolNolabel.style.paddingRight = "10px";
    rolNolabel.style.fontFamily = 'calibri';
    rolNolabel.style.fontWeight = '800';
    rolnodiv.append(rollNo);
    rollNo.style.fontFamily = 'calibri'
    rollNo.innerHTML = "12D21A0206";
    rollNo.style.fontFamily = 'calibri';
    div1.append(branchdiv);
    branchdiv.style.display = 'flex';
    branchdiv.style.justifyContent = 'center';
    branchdiv.style.alignItems = 'center';
    branchdiv.append(branchlabel);
    branchlabel.innerHTML = 'Branch:';
    branchlabel.style.fontWeight = '800';
    branchlabel.style.margin = "0px 5px";
    branchlabel.style.paddingRight = "10px";
    branchlabel.style.paddingRight = "10px";
    branchlabel.style.fontFamily = 'calibri';
    branchdiv.append(branch);
    branch.innerHTML = "EEE";
    branch.style.fontFamily = 'calibri';
    div1.append(contactdiv);
    contactdiv.append(contactlabel);
    contactdiv.style.display = 'flex';
    contactdiv.style.justifyContent = 'center';
    contactdiv.style.alignItems = 'center';
    contactlabel.innerHTML = 'Contact No:'
    contactlabel.style.fontWeight = '800';
    contactlabel.style.margin = "0px 5px";
    contactlabel.style.paddingRight = "10px";
    contactlabel.style.paddingRight = "10px";
    contactlabel.style.fontFamily = 'calibri';
    contactdiv.append(contactno);
    contactno.innerHTML = "9947665321";
    div1.append(addressdiv);
    addressdiv.append(address);
    address.innerHTML = "V.N.PALLY, Gopan Pally, near WIPRO, Vattinagulapally, Hyderabad, Telangana 500075";
    address.style.fontSize = '12px';
    address.style.fontFamily = 'math';
    address.style.textAlign = 'center'

}
