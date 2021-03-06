CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL);
    
    
CREATE TABLE "project" (
	"id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "being_created" BOOLEAN DEFAULT TRUE
);

SELECT * FROM "project";

CREATE TABLE "project_details" (
	"id" INT REFERENCES "project",
    "project_name" VARCHAR (100) NOT NULL,
    "start_date" DATE,
    "end_date" DATE,
    "project_image" VARCHAR (255)
);



CREATE TABLE "possible_thread" (
	"id" SERIAL PRIMARY KEY,
	"number" VARCHAR(10) NOT NULL,
	"color_name" VARCHAR(50) NOT NULL,
	"color_value" VARCHAR(8),
	"color_image" VARCHAR(255),
	"brand" VARCHAR(50),
	"length" DECIMAL(2,1)
	
);

CREATE TABLE "thread_needed" (
	"id" SERIAL PRIMARY KEY,
	"project_id" INT REFERENCES "project",
	"color_id" INT REFERENCES "possible_thread",
    "amount_needed" DECIMAL(5,3),
	"color_completed" BOOLEAN
	);
	
CREATE TABLE "thread_available" (
	"id" SERIAL PRIMARY KEY,
	"project_id" INT REFERENCES "project",
	"color_id" INT REFERENCES "possible_thread",
    "amount_available" DECIMAL(5,3)
	);
	
	INSERT INTO "possible_thread" ("number", "color_name", "color_value", "brand", "length") VALUES 
('150', 'Dusty Rose Ult Vy Dk', 'AB0249', 'DMC', 8.3),
('151', 'Dusty Rose Vry Lt', 'F0CED4', 'DMC', 8.3),
('152', 'Shell Pink Med Light', 'E2A099', 'DMC', 8.3),
('153', 'Violet Very Light', 'E6CCD9', 'DMC', 8.3),
('154', 'Grape Very Dark', '572433', 'DMC', 8.3),
('155', 'Blue Violet Med Dark', '9891B6', 'DMC', 8.3),
('156', 'Blue Violet Med Lt', 'A3AED1', 'DMC', 8.3),
('157', 'Cornflower Blue Vy Lt', 'BBC3D9', 'DMC', 8.3),
('158', 'Cornflower Blu M V D', '4C526E', 'DMC', 8.3),
('159', 'Blue Gray Light', 'C7CAD7', 'DMC', 8.3),
('160', 'Blue Gray Medium', '999FB7', 'DMC', 8.3),
('161', 'Blue Gray', '7880A4', 'DMC', 8.3),
('162', 'Blue Ultra Very Light', 'DBECF5', 'DMC', 8.3),
('163', 'Celadon Green Md', '4D8361', 'DMC', 8.3),
('164', 'Forest Green Lt', 'C8D8B8', 'DMC', 8.3),
('165', 'Moss Green Vy Lt', 'EFF4A4', 'DMC', 8.3),
('166', 'Moss Green Md Lt', 'C0C840', 'DMC', 8.3),
('167', 'Yellow Beige V Dk', 'A77C49', 'DMC', 8.3),
('168', 'Pewter Very Light', 'D1D1D1', 'DMC', 8.3),
('169', 'Pewter Light', '848484', 'DMC', 8.3),
('208', 'Lavender Very Dark', '835B8B', 'DMC', 8.3),
('209', 'Lavender Dark', 'A37BA7', 'DMC', 8.3),
('210', 'Lavender Medium', 'D29FC3', 'DMC', 8.3),
('211', 'Lavender Light', 'E3CBE3', 'DMC', 8.3),
('221', 'Shell Pink Vy Dk', '9C294A', 'DMC', 8.3),
('223', 'Shell Pink Light', 'CC847C', 'DMC', 8.3),
('224', 'Shell Pink Very Light', 'EBB7AF', 'DMC', 8.3),
('225', 'Shell Pink Ult Vy Lt', 'FFDFD7', 'DMC', 8.3),
('300', 'Mahogany Vy Dk', '6F2F00', 'DMC', 8.3),
('301', 'Mahogany Med', 'B35F2B', 'DMC', 8.3),
('304', 'Red Medium', 'B71F33', 'DMC', 8.3),
('307', 'Lemon', 'FDED54', 'DMC', 8.3),
('309', 'Rose Dark', 'BA4A4A', 'DMC', 8.3),
('310', 'Black', '000000', 'DMC', 8.3),
('311', 'Wedgewood Ult VyDk', '1C5066', 'DMC', 8.3),
('312', 'Baby Blue Very Dark', '35668B', 'DMC', 8.3),
('315', 'Antique Mauve Md Dk', '814952', 'DMC', 8.3),
('316', 'Antique Mauve Med', 'B7737F', 'DMC', 8.3),
('317', 'Pewter Gray', '6C6C6C', 'DMC', 8.3),
('318', 'Steel Gray Lt', 'ABABAB', 'DMC', 8.3),
('319', 'Pistachio Grn Vy Dk', '205F2E', 'DMC', 8.3),
('320', 'Pistachio Green Med', '69885A', 'DMC', 8.3),
('321', 'Red', 'C72B3B', 'DMC', 8.3),
('322', 'Baby Blue Dark', '5A8FB8', 'DMC', 8.3),
('326', 'Rose Very Dark', 'B33B4B', 'DMC', 8.3),
('327', 'Violet Dark', '633666', 'DMC', 8.3),
('333', 'Blue Violet Very Dark', '5C5478', 'DMC', 8.3),
('334', 'Baby Blue Medium', '739FC1', 'DMC', 8.3),
('335', 'Rose', 'EE546E', 'DMC', 8.3),
('336', 'Navy Blue', '253B73', 'DMC', 8.3),
('340', 'Blue Violet Medium', 'ADA7C7', 'DMC', 8.3),
('341', 'Blue Violet Light', 'B7BFDD', 'DMC', 8.3),
('347', 'Salmon Very Dark', 'BF2D2D', 'DMC', 8.3),
('349', 'Coral Dark', 'D21035', 'DMC', 8.3),
('350', 'Coral Medium', 'E04848', 'DMC', 8.3),
('351', 'Coral', 'E96A67', 'DMC', 8.3),
('352', 'Coral Light', 'FD9C97', 'DMC', 8.3),
('353', 'Peach', 'FED7CC', 'DMC', 8.3),
('355', 'Terra Cotta Dark', '984436', 'DMC', 8.3),
('356', 'Terra Cotta Med', 'C56A5B', 'DMC', 8.3),
('367', 'Pistachio Green Dk', '617A52', 'DMC', 8.3),
('368', 'Pistachio Green Lt', 'A6C298', 'DMC', 8.3),
('369', 'Pistachio Green Vy Lt', 'D7EDCC', 'DMC', 8.3),
('370', 'Mustard Medium', 'B89D64', 'DMC', 8.3),
('371', 'Mustard', 'BFA671', 'DMC', 8.3),
('372', 'Mustard Lt', 'CCB784', 'DMC', 8.3),
('400', 'Mahogany Dark', '8F430F', 'DMC', 8.3),
('402', 'Mahogany Vy Lt', 'F7A777', 'DMC', 8.3),
('407', 'Desert Sand Med', 'BB8161', 'DMC', 8.3),
('413', 'Pewter Gray Dark', '565656', 'DMC', 8.3),
('414', 'Steel Gray Dk', '8C8C8C', 'DMC', 8.3),
('415', 'Pearl Gray', 'D3D3D6', 'DMC', 8.3),
('420', 'Hazelnut Brown Dk', 'A07042', 'DMC', 8.3),
('422', 'Hazelnut Brown Lt', 'C69F7B', 'DMC', 8.3),
('433', 'Brown Med', '7A451F', 'DMC', 8.3),
('434', 'Brown Light', 'B26746', 'DMC', 8.3),
('435', 'Brown Very Light', 'B87748', 'DMC', 8.3),
('436', 'Tan', 'CB9051', 'DMC', 8.3),
('437', 'Tan Light', 'E4BB8E', 'DMC', 8.3),
('444', 'Lemon Dark', 'FFD600', 'DMC', 8.3),
('445', 'Lemon Light', 'FFFB8B', 'DMC', 8.3),
('451', 'Shell Gray Dark', '917B73', 'DMC', 8.3),
('452', 'Shell Gray Med', 'C0B3AE', 'DMC', 8.3),
('453', 'Shell Gray Light', 'D7CECB', 'DMC', 8.3),
('469', 'Avocado Green', '72843C', 'DMC', 8.3),
('470', 'Avocado Grn Lt', '94AB4F', 'DMC', 8.3),
('471', 'Avocado Grn V Lt', 'AEBF79', 'DMC', 8.3),
('472', 'Avocado Grn U Lt', 'D8E498', 'DMC', 8.3),
('498', 'Red Dark', 'A7132B', 'DMC', 8.3),
('500', 'Blue Green Vy Dk', '044D33', 'DMC', 8.3),
('501', 'Blue Green Dark', '396F52', 'DMC', 8.3),
('502', 'Blue Green', '5B9071', 'DMC', 8.3),
('503', 'Blue Green Med', '7BAC94', 'DMC', 8.3),
('505', 'Jade Green', '338362', 'DMC', 8.3),
('517', 'Wedgewood Dark', '3B768F', 'DMC', 8.3),
('518', 'Wedgewood Light', '4F93A7', 'DMC', 8.3),
('519', 'Sky Blue', '7EB1C8', 'DMC', 8.3),
('520', 'Fern Green Dark', '666D4F', 'DMC', 8.3),
('522', 'Fern Green', '969E7E', 'DMC', 8.3),
('523', 'Fern Green Lt', 'ABB197', 'DMC', 8.3),
('524', 'Fern Green Vy Lt', 'C4CDAC', 'DMC', 8.3),
('535', 'Ash Gray Vy Lt', '636458', 'DMC', 8.3),
('543', 'Beige Brown Ult Vy Lt', 'F2E3CE', 'DMC', 8.3),
('550', 'Violet Very Dark', '5C184E', 'DMC', 8.3),
('552', 'Violet  Medium', '803A6B', 'DMC', 8.3),
('553', 'Violet', 'A3638B', 'DMC', 8.3),
('554', 'Violet Light', 'DBB3CB', 'DMC', 8.3),
('561', 'Celadon Green VD', '2C6A45', 'DMC', 8.3),
('562', 'Jade Medium', '53976A', 'DMC', 8.3),
('563', 'Jade Light', '8FC098', 'DMC', 8.3),
('564', 'Jade Very Light', 'A7CDAF', 'DMC', 8.3),
('580', 'Moss Green Dk', '888D33', 'DMC', 8.3),
('581', 'Moss Green', 'A7AE38', 'DMC', 8.3),
('597', 'Turquoise', '5BA3B3', 'DMC', 8.3),
('598', 'Turquoise Light', '90C3CC', 'DMC', 8.3),
('600', 'Cranberry Very Dark', 'CD2F63', 'DMC', 8.3),
('601', 'Cranberry Dark', 'D1286A', 'DMC', 8.3),
('602', 'Cranberry Medium', 'E24874', 'DMC', 8.3),
('603', 'Cranberry', 'FFA4BE', 'DMC', 8.3),
('604', 'Cranberry Light', 'FFB0BE', 'DMC', 8.3),
('605', 'Cranberry Very Light', 'FFC0CD', 'DMC', 8.3),
('606', 'Orange?Red Bright', 'FA3203', 'DMC', 8.3),
('608', 'Burnt Orange Bright', 'FD5D35', 'DMC', 8.3),
('610', 'Drab Brown Dk', '796047', 'DMC', 8.3),
('611', 'Drab Brown', '967656', 'DMC', 8.3),
('612', 'Drab Brown Lt', 'BC9A78', 'DMC', 8.3),
('613', 'Drab Brown V Lt', 'DCC4AA', 'DMC', 8.3),
('632', 'Desert Sand Ult Vy Dk', '875539', 'DMC', 8.3),
('640', 'Beige Gray Vy Dk', '857B61', 'DMC', 8.3),
('642', 'Beige Gray Dark', 'A49878', 'DMC', 8.3),
('644', 'Beige Gray Med', 'DDD8CB', 'DMC', 8.3),
('645', 'Beaver Gray Vy Dk', '6E655C', 'DMC', 8.3),
('646', 'Beaver Gray Dk', '877D73', 'DMC', 8.3),
('647', 'Beaver Gray Med', 'B0A69C', 'DMC', 8.3),
('648', 'Beaver Gray Lt', 'BCB4AC', 'DMC', 8.3),
('666', 'Bright Red', 'E31D42', 'DMC', 8.3),
('676', 'Old Gold Lt', 'E5CE97', 'DMC', 8.3),
('677', 'Old Gold Vy Lt', 'F5ECCB', 'DMC', 8.3),
('680', 'Old Gold Dark', 'BC8D0E', 'DMC', 8.3),
('699', 'Green', '56517', 'DMC', 8.3),
('700', 'Green Bright', '07731B', 'DMC', 8.3),
('701', 'Green Light', '3F8F29', 'DMC', 8.3),
('702', 'Kelly Green', '47A72F', 'DMC', 8.3),
('703', 'Chartreuse', '7BB547', 'DMC', 8.3),
('704', 'Chartreuse Bright', '9ECF34', 'DMC', 8.3),
('712', 'Cream', 'FFFBEF', 'DMC', 8.3),
('718', 'Plum', '9C2462', 'DMC', 8.3),
('720', 'Orange Spice Dark', 'E55C1F', 'DMC', 8.3),
('721', 'Orange Spice Med', 'F27842', 'DMC', 8.3),
('722', 'Orange Spice Light', 'F7976F', 'DMC', 8.3),
('725', 'Topaz Med Lt', 'FFC840', 'DMC', 8.3),
('726', 'Topaz Light', 'FDD755', 'DMC', 8.3),
('727', 'Topaz Vy Lt', 'FFF1AF', 'DMC', 8.3),
('728', 'Topaz', 'E4B468', 'DMC', 8.3),
('729', 'Old Gold Medium', 'D0A53E', 'DMC', 8.3),
('730', 'Olive Green V Dk', '827B30', 'DMC', 8.3),
('732', 'Olive Green', '948C36', 'DMC', 8.3),
('733', 'Olive Green Md', 'BCB34C', 'DMC', 8.3),
('734', 'Olive Green Lt', 'C7C077', 'DMC', 8.3),
('738', 'Tan Very Light', 'ECCC9E', 'DMC', 8.3),
('739', 'Tan Ult Vy Lt', 'F8E4C8', 'DMC', 8.3),
('740', 'Tangerine', 'FF8B00', 'DMC', 8.3),
('741', 'Tangerine Med', 'FFA32B', 'DMC', 8.3),
('742', 'Tangerine Light', 'FFBF57', 'DMC', 8.3),
('743', 'Yellow Med', 'FED376', 'DMC', 8.3),
('744', 'Yellow Pale', 'FFE793', 'DMC', 8.3),
('745', 'Yellow Pale Light', 'FFE9AD', 'DMC', 8.3),
('746', 'Off White', 'FCFCEE', 'DMC', 8.3),
('747', 'Peacock Blue Vy Lt', 'E5FCFD', 'DMC', 8.3),
('754', 'Peach Light', 'F7CBBF', 'DMC', 8.3),
('758', 'Terra Cotta Vy Lt', 'EEAA9B', 'DMC', 8.3),
('760', 'Salmon', 'F5ADAD', 'DMC', 8.3),
('761', 'Salmon Light', 'FFC9C9', 'DMC', 8.3),
('762', 'Pearl Gray Vy Lt', 'ECECEC', 'DMC', 8.3),
('772', 'Yellow Green Vy Lt', 'E4ECD4', 'DMC', 8.3),
('775', 'Baby Blue Very Light', 'D9EBF1', 'DMC', 8.3),
('777', 'Raspberry Very Dark', '913546', 'DMC', 8.3),
('778', 'Antique Mauve Vy Lt', 'DFB3BB', 'DMC', 8.3),
('779', 'Cocoa Dark', '624B45', 'DMC', 8.3),
('780', 'Topaz Ultra Vy Dk', '94631A', 'DMC', 8.3),
('782', 'Topaz Dark', 'AE7720', 'DMC', 8.3),
('783', 'Topaz Medium', 'CE9124', 'DMC', 8.3),
('791', 'Cornflower Blue V D', '464563', 'DMC', 8.3),
('792', 'Cornflower Blue Dark', '555B7B', 'DMC', 8.3),
('793', 'Cornflower Blue Med', '707DA2', 'DMC', 8.3),
('794', 'Cornflower Blue Light', '8F9CC1', 'DMC', 8.3),
('796', 'Royal Blue Dark', '11416D', 'DMC', 8.3),
('797', 'Royal Blue', '13477D', 'DMC', 8.3),
('798', 'Delft Blue Dark', '466A8E', 'DMC', 8.3),
('799', 'Delft Blue Medium', '748EB6', 'DMC', 8.3),
('800', 'Delft Blue Pale', 'C0CCDE', 'DMC', 8.3),
('801', 'Coffee Brown Dk', '653919', 'DMC', 8.3),
('803', 'Baby Blue Ult Vy Dk', '2C597C', 'DMC', 8.3),
('807', 'Peacock Blue', '64ABBA', 'DMC', 8.3),
('809', 'Delft Blue', '94A8C6', 'DMC', 8.3),
('813', 'Blue Light', 'A1C2D7', 'DMC', 8.3),
('814', 'Garnet Dark', '7B001B', 'DMC', 8.3),
('815', 'Garnet Medium', '87071F', 'DMC', 8.3),
('816', 'Garnet', '970B23', 'DMC', 8.3),
('817', 'Coral Red Very Dark', 'BB051F', 'DMC', 8.3),
('818', 'Baby Pink', 'FFDFD9', 'DMC', 8.3),
('819', 'Baby Pink Light', 'FFEEEB', 'DMC', 8.3),
('820', 'Royal Blue Very Dark', '0E365C', 'DMC', 8.3),
('822', 'Beige Gray Light', 'E7E2D3', 'DMC', 8.3),
('823', 'Navy Blue Dark', '213063', 'DMC', 8.3),
('824', 'Blue Very Dark', '396987', 'DMC', 8.3),
('825', 'Blue Dark', '4781A5', 'DMC', 8.3),
('826', 'Blue Medium', '6B9EBF', 'DMC', 8.3),
('827', 'Blue Very Light', 'BDDDED', 'DMC', 8.3),
('828', 'Sky Blue Vy Lt', 'C5E8ED', 'DMC', 8.3),
('829', 'Golden Olive Vy Dk', '7E6B42', 'DMC', 8.3),
('830', 'Golden Olive Dk', '8D784B', 'DMC', 8.3),
('831', 'Golden Olive Md', 'AA8F56', 'DMC', 8.3),
('832', 'Golden Olive', 'BD9B51', 'DMC', 8.3),
('833', 'Golden Olive Lt', 'C8AB6C', 'DMC', 8.3),
('834', 'Golden Olive Vy Lt', 'DBBE7F', 'DMC', 8.3),
('838', 'Beige Brown Vy Dk', '594937', 'DMC', 8.3),
('839', 'Beige Brown Dk', '675541', 'DMC', 8.3),
('840', 'Beige Brown Med', '9A7C5C', 'DMC', 8.3),
('841', 'Beige Brown Lt', 'B69B7E', 'DMC', 8.3),
('842', 'Beige Brown Vy Lt', 'D1BAA1', 'DMC', 8.3),
('844', 'Beaver Gray Ult Dk', '484848', 'DMC', 8.3),
('869', 'Hazelnut Brown V Dk', '995C30', 'DMC', 8.3),
('890', 'Pistachio Grn Ult V D', '184923', 'DMC', 8.3),
('891', 'Carnation Dark', 'FF5773', 'DMC', 8.3),
('892', 'Carnation Medium', 'FF798C', 'DMC', 8.3),
('893', 'Carnation Light', 'FC90A2', 'DMC', 8.3),
('894', 'Carnation Very Light', 'FFB2BB', 'DMC', 8.3),
('895', 'Hunter Green Vy Dk', '1B5300', 'DMC', 8.3),
('898', 'Coffee Brown Vy Dk', '492A13', 'DMC', 8.3),
('899', 'Rose Medium', 'F27688', 'DMC', 8.3),
('900', 'Burnt Orange Dark', 'D15807', 'DMC', 8.3),
('902', 'Garnet Very Dark', '822637', 'DMC', 8.3),
('904', 'Parrot Green V Dk', '557822', 'DMC', 8.3),
('905', 'Parrot Green Dk', '628A28', 'DMC', 8.3),
('906', 'Parrot Green Md', '7FB335', 'DMC', 8.3),
('907', 'Parrot Green Lt', 'C7E666', 'DMC', 8.3),
('909', 'Emerald Green Vy Dk', '156F49', 'DMC', 8.3),
('910', 'Emerald Green Dark', '30745B', 'DMC', 8.3),
('911', 'Emerald Green Med', '189065', 'DMC', 8.3),
('912', 'Emerald Green Lt', '1B9D6B', 'DMC', 8.3),
('913', 'Nile Green Med', '6DAB77', 'DMC', 8.3),
('915', 'Plum Dark', '820043', 'DMC', 8.3),
('917', 'Plum Medium', '9B1359', 'DMC', 8.3),
('918', 'Red?Copper Dark', '82340A', 'DMC', 8.3),
('919', 'Red?Copper', 'A64510', 'DMC', 8.3),
('920', 'Copper Med', 'AC5414', 'DMC', 8.3),
('921', 'Copper', 'C66218', 'DMC', 8.3),
('922', 'Copper Light', 'E27323', 'DMC', 8.3),
('924', 'Gray Green Vy Dark', '566A6A', 'DMC', 8.3),
('926', 'Gray Green Med', '98AEAE', 'DMC', 8.3),
('927', 'Gray Green Light', 'BDCBCB', 'DMC', 8.3),
('928', 'Gray Green Vy Lt', 'DDE3E3', 'DMC', 8.3),
('930', 'Antique Blue Dark', '455C71', 'DMC', 8.3),
('931', 'Antique Blue Medium', '6A859E', 'DMC', 8.3),
('932', 'Antique Blue Light', 'A2B5C6', 'DMC', 8.3),
('934', 'Avocado Grn Black', '313919', 'DMC', 8.3),
('935', 'Avocado Green Dk', '424D21', 'DMC', 8.3),
('936', 'Avocado Grn V Dk', '4C5826', 'DMC', 8.3),
('937', 'Avocado Green Md', '627133', 'DMC', 8.3),
('938', 'Coffee Brown Ult Dk', '361F0E', 'DMC', 8.3),
('939', 'Navy Blue Very Dark', '1B2853', 'DMC', 8.3),
('943', 'Green Bright Md', '3D9384', 'DMC', 8.3),
('945', 'Tawny', 'FBD5BB', 'DMC', 8.3),
('946', 'Burnt Orange Med', 'EB6307', 'DMC', 8.3),
('947', 'Burnt Orange', 'FF7B4D', 'DMC', 8.3),
('948', 'Peach Very Light', 'FEE7DA', 'DMC', 8.3),
('950', 'Desert Sand Light', 'EED3C4', 'DMC', 8.3),
('951', 'Tawny Light', 'FFE2CF', 'DMC', 8.3),
('954', 'Nile Green', '88BA91', 'DMC', 8.3),
('955', 'Nile Green Light', 'A2D6AD', 'DMC', 8.3),
('956', 'Geranium', 'FF9191', 'DMC', 8.3),
('957', 'Geranium Pale', 'FDB5B5', 'DMC', 8.3),
('958', 'Sea Green Dark', '3EB6A1', 'DMC', 8.3),
('959', 'Sea Green Med', '59C7B4', 'DMC', 8.3),
('961', 'Dusty Rose Dark', 'CF7373', 'DMC', 8.3),
('962', 'Dusty Rose Medium', 'E68A8A', 'DMC', 8.3),
('963', 'Dusty Rose Ult Vy Lt', 'FFD7D7', 'DMC', 8.3),
('964', 'Sea Green Light', 'A9E2D8', 'DMC', 8.3),
('966', 'Jade Ultra Vy Lt', 'B9D7C0', 'DMC', 8.3),
('967', 'Apricot Very Light', 'FFDED5', 'DMC', 8.3),
('970', 'Pumpkin Light', 'F78B13', 'DMC', 8.3),
('972', 'Canary Deep', 'FFB515', 'DMC', 8.3),
('973', 'Canary Bright', 'FFE300', 'DMC', 8.3),
('975', 'Golden Brown Dk', '914F12', 'DMC', 8.3),
('976', 'Golden Brown Med', 'C28142', 'DMC', 8.3),
('977', 'Golden Brown Light', 'DC9C56', 'DMC', 8.3),
('986', 'Forest Green Vy Dk', '405230', 'DMC', 8.3),
('987', 'Forest Green Dk', '587141', 'DMC', 8.3),
('988', 'Forest Green Med', '738B5B', 'DMC', 8.3),
('989', 'Forest Green ', '8DA675', 'DMC', 8.3),
('991', 'Aquamarine Dk', '477B6E', 'DMC', 8.3),
('992', 'Aquamarine Lt', '6FAE9F', 'DMC', 8.3),
('993', 'Aquamarine Vy Lt', '90C0B4', 'DMC', 8.3),
('995', 'Electric Blue Dark', '2696B6', 'DMC', 8.3),
('996', 'Electric Blue Medium', '30C2EC', 'DMC', 8.3),
('3011', 'Khaki Green Dk', '898A58', 'DMC', 8.3),
('3012', 'Khaki Green Md', 'A6A75D', 'DMC', 8.3),
('3013', 'Khaki Green Lt', 'B9B982', 'DMC', 8.3),
('3021', 'Brown Gray Vy Dk', '4F4B41', 'DMC', 8.3),
('3022', 'Brown Gray Med', '8E9078', 'DMC', 8.3),
('3023', 'Brown Gray Light', 'B1AA97', 'DMC', 8.3),
('3024', 'Brown Gray Vy Lt', 'EBEAE7', 'DMC', 8.3),
('3031', 'Mocha Brown Vy Dk', '4B3C2A', 'DMC', 8.3),
('3032', 'Mocha Brown Med', 'B39F8B', 'DMC', 8.3),
('3033', 'Mocha Brown Vy Lt', 'E3D8CC', 'DMC', 8.3),
('3041', 'Antique Violet Medium', '956F7C', 'DMC', 8.3),
('3042', 'Antique Violet Light', 'B79DA7', 'DMC', 8.3),
('3045', 'Yellow Beige Dk', 'BC966A', 'DMC', 8.3),
('3046', 'Yellow Beige Md', 'D8BC9A', 'DMC', 8.3),
('3047', 'Yellow Beige Lt', 'E7D6C1', 'DMC', 8.3),
('3051', 'Green Gray Dk', '5F6648', 'DMC', 8.3),
('3052', 'Green Gray Md', '889268', 'DMC', 8.3),
('3053', 'Green Gray', '9CA482', 'DMC', 8.3),
('3064', 'Desert Sand', 'C48E70', 'DMC', 8.3),
('3072', 'Beaver Gray Vy Lt', 'E6E8E8', 'DMC', 8.3),
('3078', 'Golden Yellow Vy Lt', 'FDF9CD', 'DMC', 8.3),
('3325', 'Baby Blue Light', 'B8D2E6', 'DMC', 8.3),
('3326', 'Rose Light', 'FBADB4', 'DMC', 8.3),
('3328', 'Salmon Dark', 'E36D6D', 'DMC', 8.3),
('3340', 'Apricot Med', 'FF836F', 'DMC', 8.3),
('3341', 'Apricot', 'FCAB98', 'DMC', 8.3),
('3345', 'Hunter Green Dk', '1B5915', 'DMC', 8.3),
('3346', 'Hunter Green', '406A3A', 'DMC', 8.3),
('3347', 'Yellow Green Med', '71935C', 'DMC', 8.3),
('3348', 'Yellow Green Lt', 'CCD9B1', 'DMC', 8.3),
('3350', 'Dusty Rose Ultra Dark', 'BC4365', 'DMC', 8.3),
('3354', 'Dusty Rose Light', 'E4A6AC', 'DMC', 8.3),
('3362', 'Pine Green Dk', '5E6B47', 'DMC', 8.3),
('3363', 'Pine Green Md', '728256', 'DMC', 8.3),
('3364', 'Pine Green', '83975F', 'DMC', 8.3),
('3371', 'Black Brown', '1E1108', 'DMC', 8.3),
('3607', 'Plum Light', 'C54989', 'DMC', 8.3),
('3608', 'Plum Very Light', 'EA9CC4', 'DMC', 8.3),
('3609', 'Plum Ultra Light', 'F4AED7', 'DMC', 8.3),
('3685', 'Mauve Very Dark', '881531', 'DMC', 8.3),
('3687', 'Mauve', 'C96B70', 'DMC', 8.3),
('3688', 'Mauve Medium', 'E7A9AC', 'DMC', 8.3),
('3689', 'Mauve Light', 'FBBFC2', 'DMC', 8.3),
('3705', 'Melon Dark', 'FF7992', 'DMC', 8.3),
('3706', 'Melon Medium', 'FFADBC', 'DMC', 8.3),
('3708', 'Melon Light', 'FFCBD5', 'DMC', 8.3),
('3712', 'Salmon Medium', 'F18787', 'DMC', 8.3),
('3713', 'Salmon Very Light', 'FFE2E2', 'DMC', 8.3),
('3716', 'Dusty Rose Med Vy Lt', 'FFBDBD', 'DMC', 8.3),
('3721', 'Shell Pink Dark', 'A14B51', 'DMC', 8.3),
('3722', 'Shell Pink Med', 'BC6C64', 'DMC', 8.3),
('3726', 'Antique Mauve Dark', '9B5B66', 'DMC', 8.3),
('3727', 'Antique Mauve Light', 'DBA9B2', 'DMC', 8.3),
('3731', 'Dusty Rose Very Dark', 'DA6783', 'DMC', 8.3),
('3733', 'Dusty Rose', 'E8879B', 'DMC', 8.3),
('3740', 'Antique Violet Dark', '785762', 'DMC', 8.3),
('3743', 'Antique Violet Vy Lt', 'D7CBD3', 'DMC', 8.3),
('3746', 'Blue Violet Dark', '776B98', 'DMC', 8.3),
('3747', 'Blue Violet Vy Lt', 'D3D7ED', 'DMC', 8.3),
('3750', 'Antique Blue Very Dk', '384C5E', 'DMC', 8.3),
('3752', 'Antique Blue Very Lt', 'C7D1DB', 'DMC', 8.3),
('3753', 'Antique Blue Ult Vy Lt', 'DBE2E9', 'DMC', 8.3),
('3755', 'Baby Blue', '92B4CE', 'DMC', 8.3),
('3756', 'Baby Blue Ult Vy Lt', 'EEFCFC', 'DMC', 8.3),
('3760', 'Wedgewood Med', '3E85A2', 'DMC', 8.3),
('3761', 'Sky Blue Light', 'ACD8E2', 'DMC', 8.3),
('3765', 'Peacock Blue Vy Dk', '347F8C', 'DMC', 8.3),
('3766', 'Peacock Blue Light', '99CFD9', 'DMC', 8.3),
('3768', 'Gray Green Dark', '657F7F', 'DMC', 8.3),
('3770', 'Tawny Vy Light', 'FFEEE3', 'DMC', 8.3),
('3771', 'Terra Cotta Ult Vy Lt', 'F4BBA9', 'DMC', 8.3),
('3772', 'Desert Sand Vy Dk', 'A06C50', 'DMC', 8.3),
('3774', 'Desert Sand Vy Lt', 'F3E1D7', 'DMC', 8.3),
('3776', 'Mahogany Light', 'CF7939', 'DMC', 8.3),
('3777', 'Terra Cotta Vy Dk', '863022', 'DMC', 8.3),
('3778', 'Terra Cotta Light', 'D98978', 'DMC', 8.3),
('3779', 'Rosewood Ult Vy Lt', 'F8CAC8', 'DMC', 8.3),
('3781', 'Mocha Brown Dk', '6B5743', 'DMC', 8.3),
('3782', 'Mocha Brown Lt', 'D2BCA6', 'DMC', 8.3),
('3787', 'Brown Gray Dark', '625D50', 'DMC', 8.3),
('3790', 'Beige Gray Ult Dk', '7F6A55', 'DMC', 8.3),
('3799', 'Pewter Gray Vy Dk', '424242', 'DMC', 8.3),
('3801', 'Melon Very Dark', 'E74967', 'DMC', 8.3),
('3802', 'Antique Mauve Vy Dk', '714149', 'DMC', 8.3),
('3803', 'Mauve Dark', 'AB3357', 'DMC', 8.3),
('3804', 'Cyclamen Pink Dark', 'E02876', 'DMC', 8.3),
('3805', 'Cyclamen Pink', 'F3478B', 'DMC', 8.3),
('3806', 'Cyclamen Pink Light', 'FF8CAE', 'DMC', 8.3),
('3807', 'Cornflower Blue', '60678C', 'DMC', 8.3),
('3808', 'Turquoise Ult Vy Dk', '366970', 'DMC', 8.3),
('3809', 'Turquoise Vy Dark', '3F7C85', 'DMC', 8.3),
('3810', 'Turquoise Dark', '488E9A', 'DMC', 8.3),
('3811', 'Turquoise Very Light', 'BCE3E6', 'DMC', 8.3),
('3812', 'Sea Green Vy Dk', '2F8C84', 'DMC', 8.3),
('3813', 'Blue Green Lt', 'B2D4BD', 'DMC', 8.3),
('3814', 'Aquamarine', '508B7D', 'DMC', 8.3),
('3815', 'Celadon Green Dk', '477759', 'DMC', 8.3),
('3816', 'Celadon Green', '65A57D', 'DMC', 8.3),
('3817', 'Celadon Green Lt', '99C3AA', 'DMC', 8.3),
('3818', 'Emerald Grn Ult V Dk', '115A3B', 'DMC', 8.3),
('3819', 'Moss Green Lt', 'E0E868', 'DMC', 8.3),
('3820', 'Straw Dark', 'DFB65F', 'DMC', 8.3),
('3821', 'Straw', 'F3CE75', 'DMC', 8.3),
('3822', 'Straw Light', 'F6DC98', 'DMC', 8.3),
('3823', 'Yellow Ultra Pale', 'FFFDE3', 'DMC', 8.3),
('3824', 'Apricot Light', 'FECDC2', 'DMC', 8.3),
('3825', 'Pumpkin Pale', 'FDBD96', 'DMC', 8.3),
('3826', 'Golden Brown', 'AD7239', 'DMC', 8.3),
('3827', 'Golden Brown Pale', 'F7BB77', 'DMC', 8.3),
('3828', 'Hazelnut Brown', 'B78B61', 'DMC', 8.3),
('3829', 'Old Gold Vy Dark', 'A98204', 'DMC', 8.3),
('3830', 'Terra Cotta', 'BC5544', 'DMC', 8.3),
('3831', 'Raspberry Dark', 'B32F48', 'DMC', 8.3),
('3832', 'Raspberry Medium', 'DB556E', 'DMC', 8.3),
('3833', 'Raspberry Light', 'EA8699', 'DMC', 8.3),
('3834', 'Grape Dark', '72375D', 'DMC', 8.3),
('3835', 'Grape Medium', '946083', 'DMC', 8.3),
('3836', 'Grape Light', 'BA91AA', 'DMC', 8.3),
('3837', 'Lavender Ultra Dark', '6C3A6E', 'DMC', 8.3),
('3838', 'Lavender Blue Dark', '5C7294', 'DMC', 8.3),
('3839', 'Lavender Blue Med', '7B8EAB', 'DMC', 8.3),
('3840', 'Lavender Blue Light', 'B0C0DA', 'DMC', 8.3),
('3841', 'Baby Blue Pale', 'CDDFED', 'DMC', 8.3),
('3842', 'Wedgewood Vry Dk', '32667C', 'DMC', 8.3),
('3843', 'Electric Blue', '14AAD0', 'DMC', 8.3),
('3844', 'Turquoise Bright Dark', '12AEBA', 'DMC', 8.3),
('3845', 'Turquoise Bright Med', '04C4CA', 'DMC', 8.3),
('3846', 'Turquoise Bright Light', '06E3E6', 'DMC', 8.3),
('3847', 'Teal Green Dark', '347D75', 'DMC', 8.3),
('3848', 'Teal Green Med', '419392', 'DMC', 8.3),
('3849', 'Teal Green Light', '52B3AE', 'DMC', 8.3),
('3850', 'Green Bright Dk', '378477', 'DMC', 8.3),
('3851', 'Green Bright Lt', '49B3A1', 'DMC', 8.3),
('3852', 'Straw Very Dark', 'CD9D37', 'DMC', 8.3),
('3853', 'Autumn Gold Dk', 'F29746', 'DMC', 8.3),
('3854', 'Autumn Gold Med', 'F2AF68', 'DMC', 8.3),
('3855', 'Autumn Gold Lt', 'FAD396', 'DMC', 8.3),
('3856', 'Mahogany Ult Vy Lt', 'FFD3B5', 'DMC', 8.3),
('3857', 'Rosewood Dark', '68251A', 'DMC', 8.3),
('3858', 'Rosewood Med', '964A3F', 'DMC', 8.3),
('3859', 'Rosewood Light', 'BA8B7C', 'DMC', 8.3),
('3860', 'Cocoa', '7D5D57', 'DMC', 8.3),
('3861', 'Cocoa Light', 'A68881', 'DMC', 8.3),
('3862', 'Mocha Beige Dark', '8A6E4E', 'DMC', 8.3),
('3863', 'Mocha Beige Med', 'A4835C', 'DMC', 8.3),
('3864', 'Mocha Beige Light', 'CBB69C', 'DMC', 8.3),
('3865', 'Winter White', 'F9F7F1', 'DMC', 8.3),
('3866', 'Mocha Brn Ult Vy Lt', 'FAF6F0', 'DMC', 8.3),
('3773', 'Desert Sand Dark', 'B67552', 'DMC', 8.3),
('B5200', 'Snow White', 'FFFFFF', 'DMC', 8.3),
('Ecru', 'Ecru', 'F0EADA', 'DMC', 8.3),
('White', 'White', 'FCFBF8', 'DMC', 8.3);