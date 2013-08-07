INSERT INTO `cashregister`.`users` (`id`, `login`, `password`, `name`, `group`, `disabled`) VALUES (NULL, 'Joep', 'test', 'Joep Vugts', 'Admin', '0');

INSERT INTO `cashregister`.`items` 
	(`id`, `name`, `type_id`, `price_exc`, `price_tax`, `price_inc`, `cost_exc`, `cost_tax`, `cost_inc`, `archived`) 
VALUES 
	(NULL, 'Baco', NULL, NULL, NULL, '3', NULL, NULL, NULL, NULL), 
	(NULL, 'Fanta', NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL), 
	(NULL, 'Smirnoff', NULL, NULL, NULL, '3', NULL, NULL, NULL, NULL), 
	(NULL, 'Zoete wijn', NULL, NULL, NULL, '2', NULL, NULL, NULL, NULL), 
	(NULL, 'Droge wijn', NULL, NULL, NULL, '2', NULL, NULL, NULL, NULL), 
	(NULL, 'Rode wijn', NULL, NULL, NULL, '2', NULL, NULL, NULL, NULL), 
	(NULL, 'Rosé', NULL, NULL, NULL, '2', NULL, NULL, NULL, NULL), 
	(NULL, 'Cassis', NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL), 
	(NULL, 'Sprite', NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL), 
	(NULL, 'Ice Tea', NULL, NULL, NULL, '1.30', NULL, NULL, NULL, NULL), 
	(NULL, 'Cherry Coke', NULL, NULL, NULL, '1.30', NULL, NULL, NULL, NULL), 
	(NULL, 'Gulden Draak', NULL, NULL, NULL, '2.50', NULL, NULL, NULL, NULL), 
	(NULL, 'Palm', NULL, NULL, NULL, '2', NULL, NULL, NULL, NULL), 
	(NULL, 'Witbier', NULL, NULL, NULL, '2', NULL, NULL, NULL, NULL)