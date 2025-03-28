<?php
/**
 * Plugin Name: Rather Simple Background Slider
 * Plugin URI:
 * Update URI: false
 * Version: 2.0
 * Requires at least: 6.8
 * Requires PHP: 7.4
 * Author: Oscar Ciutat
 * Author URI: http://oscarciutat.com/code/
 * Text Domain: rather-simple-background-slider
 * Domain Path: /languages
 * Description: A really simple background-slider
 * License: GPLv2 or later
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @package rather_simple_background_slider
 */

/**
 * Core class used to implement the plugin.
 */
class Rather_Simple_Background_Slider_Block {

	/**
	 * Plugin instance.
	 *
	 * @var object $instance
	 */
	protected static $instance = null;

	/**
	 * Access this plugin’s working instance
	 */
	public static function get_instance() {

		if ( ! self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Used for regular plugin work.
	 */
	public function plugin_setup() {

		$this->includes();

		add_action( 'init', array( $this, 'register_block' ) );
	}

	/**
	 * Constructor. Intentionally left empty and public.
	 */
	public function __construct() {}

	/**
	 * Includes required core files used in admin and on the frontend.
	 */
	protected function includes() {}

	/**
	 * Registers block
	 *
	 * @throws Error If block is not built.
	 */
	public function register_block() {

		if ( ! function_exists( 'register_block_type' ) ) {
			// The block editor is not active.
			return;
		}

		// Register the block.
		register_block_type( __DIR__ . '/build/blocks/background-slider' );

		// Load translations.
		$script_handle = generate_block_asset_handle( 'occ/rather-simple-background-slider', 'editorScript' );
		wp_set_script_translations( $script_handle, 'rather-simple-background-slider', plugin_dir_path( __FILE__ ) . 'languages' );
	}
}

add_action( 'plugins_loaded', array( Rather_Simple_Background_Slider_Block::get_instance(), 'plugin_setup' ) );
