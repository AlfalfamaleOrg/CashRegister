CREATE TABLE IF NOT EXISTS `types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `btw` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

INSERT INTO `types` (`id`, `name`, `btw`) VALUES
(1, 'Non-alcoholisch', 6),
(2, 'Alcoholisch', 21),
(3, 'Snoep', 6);

ALTER TABLE  `items` ADD INDEX (  `type_id` ) ;

ALTER TABLE  `items` ADD FOREIGN KEY (  `type_id` ) REFERENCES  `cashregister`.`types` (
`id`
) ON DELETE RESTRICT ON UPDATE RESTRICT ;