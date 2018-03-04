<?php

namespace Drupal\react_drupal_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Cache\UncacheableDependencyTrait;

/**
 * Provides a React block.
 *
 * @Block(
 *  id = "react_block",
 *  admin_label = @Translation("Sample React Block"),
 * )
 */
class ReactBlock extends BlockBase {

  use UncacheableDependencyTrait;

  /**
   * {@inheritdoc}
   */
  public function build() {

    $build = [];

   // Do NOT cache a page with this block on it.
    \Drupal::service('page_cache_kill_switch')->trigger();
    $uuid;
    $contentType;
    if ($node = \Drupal::routeMatch()->getParameter('node')) {
      $contentType = $node->bundle();
      $uuid = $node->uuid->value;
    }
    else {
      $contentType = null;
      $uuid = null;
    }
    $build = array (
      '#theme' => 'react_drupal_block',
      '#attached' => array(
        'library' => array(
        'react_drupal_block/global',
        ),
      ),
      '#uuid' => $uuid,
      '#contentType' => $contentType
    );
    return $build;
  }

}
