CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

ALTER TABLE  `orders` ADD FOREIGN KEY (  `user_id` ) REFERENCES  `users` (
`id`
) ON DELETE RESTRICT ON UPDATE RESTRICT ;

CREATE TABLE IF NOT EXISTS `orders_items` (
  `order_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `price_inc` decimal(3,2) NOT NULL,
  `price_vat` decimal(3,2) NOT NULL,
  `count` int(11) NOT NULL,
  PRIMARY KEY (`order_id`,`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE  `orders_items` ADD FOREIGN KEY (  `order_id` ) REFERENCES  `orders` (
`id`
) ON DELETE RESTRICT ON UPDATE RESTRICT ;

ALTER TABLE  `orders_items` ADD FOREIGN KEY (  `item_id` ) REFERENCES  `items` (
`id`
) ON DELETE RESTRICT ON UPDATE RESTRICT ;