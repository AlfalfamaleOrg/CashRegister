<div id="ItemManager" class="Screen">
	<button class="ChangeScreen" data-screen="reload">Terug</button>
	<table>
		<tr>
			<th>Naam</th>
			<th>Prijs inc.</th>
		</tr>
		<tr id="manage_item_dummy" class="Item">
			<td class="Name"></td>
			<td class="Price"></td>
		</tr>
	</table>
	<button class="ClearSelection">Nieuw product</button>
	<button id="ItemManagerDeleteItemButton">Verwijder</button>
	<div>
		<form id="ManageItemForm">
			<input type="hidden" name="id">
			<label>Naam: <input name="name"></label><br>
			<label>Prijs: <input type="number" name="price_inc"></label><Br>
			<input type="submit" value="Opslaan">
		</form>
	</div>
</div>